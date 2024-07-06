import { sql } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name"),
  email: text("email").notNull().unique(),
  count: integer("count").default(0),

  createdAt: timestamp("created_at").default(sql`now()`),
});

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  customerId: text("customer_id").notNull(),
  subscriptionId: text("subscription_id").notNull(),
  priceId: text("price_id").notNull(),
  endDate: timestamp("end_date"),
});
