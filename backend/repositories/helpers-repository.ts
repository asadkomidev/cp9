import { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { IHelpersRepository } from ".";
import * as schema from "../database/schema";
import { db } from "../database";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";
import { MAX_FREE_USE } from "../utilities/constants/count-limit";

export class HelpersRepository implements IHelpersRepository {
  private _db: NeonHttpDatabase<typeof schema>;

  constructor() {
    this._db = db;
  }

  async updateCountHelper(user: KindeUser): Promise<void> {
    try {
      const [limit] = await this._db
        .select()
        .from(users)
        .where(eq(users.userId, user.id));

      if (limit) {
        await db
          .update(users)
          .set({ count: (limit.count ?? 0) + 1 })
          .where(eq(users.userId, user.id));
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async checkCountHelper(userId: string): Promise<boolean> {
    try {
      const [limit] = await this._db
        .select()
        .from(users)
        .where(eq(users.userId, userId));

      if (!limit || (limit?.count ?? 0) < MAX_FREE_USE) {
        return true;
      } else {
        return false;
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getCountHelper(userId: string): Promise<number> {
    try {
      const [limit] = await this._db
        .select()
        .from(users)
        .where(eq(users.userId, userId));

      if (!limit) {
        return 0;
      }

      return limit?.count ?? 0;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
