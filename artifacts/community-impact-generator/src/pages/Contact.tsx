import { useEffect, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { submitContact } from '@workspace/api-client-react';
import { trackEvent } from '../lib/analytics';

type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const emptyForm: ContactFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

export function Contact() {
  const [form, setForm] = useState<ContactFields>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const homeTitle = 'Charity Hustle | Turn Spare Time Into Community Impact';
    const homeDescription = 'Charity Hustle helps you turn your passions, practical skills and spare time into meaningful ways to support charities and strengthen your community.';
    const pageTitle = 'Contact Charity Hustle | Questions and Suggestions';
    const pageDescription = 'Contact Charity Hustle with a question, suggestion, partnership idea, or feedback about finding meaningful ways to support your community.';
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    document.title = pageTitle;
    metaDesc?.setAttribute('content', pageDescription);
    ogTitle?.setAttribute('content', pageTitle);
    ogDescription?.setAttribute('content', pageDescription);
    twitterTitle?.setAttribute('content', pageTitle);
    twitterDescription?.setAttribute('content', pageDescription);

    return () => {
      document.title = homeTitle;
      metaDesc?.setAttribute('content', homeDescription);
      ogTitle?.setAttribute('content', homeTitle);
      ogDescription?.setAttribute('content', homeDescription);
      twitterTitle?.setAttribute('content', homeTitle);
      twitterDescription?.setAttribute('content', homeDescription);
    };
  }, []);

  const updateField = (field: keyof ContactFields, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    try {
      const result = await submitContact(form);
      setForm(emptyForm);
      setStatus('sent');
      setFeedback(result.message);
      trackEvent('contact_submitted');
    } catch {
      setStatus('error');
      setFeedback('Your message could not be delivered. Please check your details and try again.');
      trackEvent('contact_failed');
    }
  };

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="contact-intro">
        <div className="eyebrow"><span className="eyebrow-line" /> Say hello</div>
        <h1 id="contact-title">Let’s make good ideas easier to act on.</h1>
        <p>Send a question, suggestion, partnership idea, or a note about something Charity Hustle could do better.</p>
        <div className="contact-note">
          <MessageCircle />
          <span><strong>A real contact form.</strong> Your message is securely delivered without opening your email app.</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-heading">
          <Mail />
          <div><span>Your message</span><small>All fields are required</small></div>
        </div>

        <div className="contact-field-row">
          <label>
            <span>Name</span>
            <input
              type="text"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              data-testid="input-contact-name"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              data-testid="input-contact-email"
            />
          </label>
        </div>

        <label>
          <span>Subject</span>
          <input
            type="text"
            required
            minLength={2}
            maxLength={140}
            value={form.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            data-testid="input-contact-subject"
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            required
            minLength={10}
            maxLength={5000}
            rows={7}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            data-testid="input-contact-message"
          />
        </label>

        <label className="contact-honeypot" aria-hidden="true">
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => updateField('website', event.target.value)}
          />
        </label>

        {feedback && (
          <div className={`contact-feedback ${status}`} role="status" data-testid="status-contact-form">
            {status === 'sent' && <CheckCircle2 />}
            {feedback}
          </div>
        )}

        <button type="submit" className="contact-submit" disabled={status === 'sending'} data-testid="button-contact-submit">
          {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowRight />
        </button>
      </form>
    </section>
  );
}