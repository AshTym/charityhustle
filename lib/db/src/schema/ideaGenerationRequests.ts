import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const ideaGenerationRequestsTable = pgTable(
  "idea_generation_requests",
  {
    id: uuid("id").primaryKey(),
    requesterHash: text("requester_hash").notNull(),
    status: text("status").notNull(),
    generationId: uuid("generation_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("idea_generation_requests_quota_idx").on(
      table.requesterHash,
      table.createdAt,
    ),
  ],
);