import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

// Enums
export const roleEnum = pgEnum("role", ["User", "Admin"]);
export const campaignStatusEnum = pgEnum("campaign_status", [
  "Draft",
  "Scheduled",
  "Sent",
]);
export const emailStatusEnum = pgEnum("email_status", [
  "Pending",
  "Sent",
  "Failed",
]);

// Tables
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: roleEnum("role").default("User"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const campaigns = pgTable("campaigns", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  status: campaignStatusEnum("status").default("Draft"),
  scheduledAt: timestamp("scheduled_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  templateId: integer("template_id")
    .notNull()
    .references(() => templates.id),
});

export const templates = pgTable("templates", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  content: text("content").notNull(),
});

export const emails = pgTable("emails", {
  id: serial("id").primaryKey(),
  campaignId: integer("campaign_id")
    .notNull()
    .references(() => campaigns.id),
  templateId: integer("template_id")
    .notNull()
    .unique()
    .references(() => templates.id),
  recipientEmail: varchar("recipient_email", { length: 255 }).notNull(),
  status: emailStatusEnum("status").default("Pending"),
  sentAt: timestamp("sent_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
