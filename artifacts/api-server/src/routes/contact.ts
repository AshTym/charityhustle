import { ReplitConnectors } from "@replit/connectors-sdk";
import { Router, type IRouter } from "express";
import {
  SubmitContactBody,
  SubmitContactResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();
const connectors = new ReplitConnectors();

const WINDOW_MS = 60 * 60 * 1000;
const MAX_SUBMISSIONS = 5;
const submissionTimes = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (submissionTimes.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (recent.length >= MAX_SUBMISSIONS) {
    submissionTimes.set(key, recent);
    return true;
  }

  recent.push(now);
  submissionTimes.set(key, recent);
  return false;
}

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Please check the form and try again." });
    return;
  }

  const { name, email, subject, message, website } = parsed.data;

  // Quietly accept honeypot submissions so automated senders do not adapt.
  if (website) {
    res.json(
      SubmitContactResponse.parse({
        success: true,
        message: "Thanks — your message has been sent.",
      }),
    );
    return;
  }

  const rateLimitKey = req.ip || "unknown";
  if (isRateLimited(rateLimitKey)) {
    res.status(429).json({
      error: "Too many messages have been sent. Please try again later.",
    });
    return;
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    req.log.error("CONTACT_TO_EMAIL is not configured");
    res.status(500).json({
      error: "The contact form is temporarily unavailable.",
    });
    return;
  }

  const body = [
    "New Charity Hustle contact message",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    message,
  ].join("\n");

  try {
    const response = await connectors.proxy("resend", "/emails", {
      method: "POST",
      body: {
        from:
          process.env.CONTACT_FROM_EMAIL ??
          "Charity Hustle <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `[Charity Hustle] ${subject}`,
        text: body,
      },
    });

    if (!response.ok) {
      req.log.error(
        { statusCode: response.status },
        "Resend rejected contact message",
      );
      res.status(500).json({
        error: "Your message could not be delivered. Please try again.",
      });
      return;
    }

    res.json(
      SubmitContactResponse.parse({
        success: true,
        message: "Thanks — your message has been sent.",
      }),
    );
  } catch (error) {
    req.log.error(
      { err: error instanceof Error ? error.message : "Unknown error" },
      "Contact message delivery failed",
    );
    res.status(500).json({
      error: "Your message could not be delivered. Please try again.",
    });
  }
});

export default router;