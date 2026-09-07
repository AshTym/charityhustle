import {
  index,
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

export type GeneratedIdeaContent = {
  id: string;
  tag: string;
  title: string;
  description: string;
  time: string;
  first: string;
  why: string;
  impact: string;
  potential: string;
  expand: string;
};

export type IdeaQuestionnaireSnapshot = {
  interests: string[];
  skills: string[];
  passionsDetail: string;
  contributionDetail: string;
  time: string;
  outcome: string;
  mode: string;
  kidFriendly: boolean;
  country?: string;
};

export const generatedIdeasTable = pgTable(
  "generated_ideas",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    generationId: uuid("generation_id").notNull(),
    requesterHash: text("requester_hash").notNull(),
    titleFingerprint: text("title_fingerprint").notNull().unique(),
    conceptFingerprint: text("concept_fingerprint"),
    questionnaire: jsonb("questionnaire")
      .$type<IdeaQuestionnaireSnapshot>()
      .notNull(),
    idea: jsonb("idea").$type<GeneratedIdeaContent>().notNull(),
    model: text("model").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("generated_ideas_generation_idx").on(table.generationId),
    index("generated_ideas_requester_idx").on(table.requesterHash, table.createdAt),
    index("generated_ideas_created_at_idx").on(table.createdAt),
    uniqueIndex("generated_ideas_concept_fingerprint_unique").on(
      table.conceptFingerprint,
    ),
  ],
);

export type GeneratedIdeaRecord = typeof generatedIdeasTable.$inferSelect;