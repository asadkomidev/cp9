import { InferSelectModel } from "drizzle-orm";
import { subscriptions, users } from "../database/schema";

export type UserType = InferSelectModel<typeof users>;

export type ReturnedUserType = {
  id: number;
  userId: string;
  firstName: string;
  lastName: string | "";
  email: string;
  count: number | 0;
  createdAt: Date;
};

export type SubscriptionType = InferSelectModel<typeof subscriptions>;
