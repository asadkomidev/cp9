import { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { ISubscriptionRepository } from ".";
import * as schema from "../database/schema";
import { db } from "../database";
import { subscriptions } from "../database/schema";
import { eq } from "drizzle-orm";

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export class SubscriptionRepository implements ISubscriptionRepository {
  private _db: NeonHttpDatabase<typeof schema>;

  constructor() {
    this._db = db;
  }

  async checkSubscription(userId: string): Promise<boolean> {
    try {
      const [subscription] = await this._db
        .select()
        .from(subscriptions)
        .where(eq(subscriptions.userId, userId));

      if (!subscription) {
        return false;
      }

      const isValid =
        subscription.priceId &&
        subscription.endDate?.getTime()! + DAY_IN_MS > Date.now();

      return !!isValid;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
