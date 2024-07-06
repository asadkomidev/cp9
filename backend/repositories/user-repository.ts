import { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { IUserRepository } from ".";
import { db } from "../database";
import { users } from "../database/schema";
import { UserDTO } from "../dtos/user-dto";
import * as schema from "../database/schema";
import { eq } from "drizzle-orm";

export class UserRepository implements IUserRepository {
  private _db: NeonHttpDatabase<typeof schema>;

  constructor() {
    this._db = db;
  }

  async createUser(user: UserDTO): Promise<UserDTO> {
    const { userId, firstName, lastName, email, count } = user;

    const [data] = await this._db
      .insert(users)
      .values({
        userId,
        firstName,
        lastName,
        email,
        count,
      })
      .returning();

    if (!data) {
      throw new Error("Failed to create user");
    }

    const response = UserDTO.response(data);

    return response;
  }

  async updateUser(user: Partial<UserDTO>, id: string): Promise<UserDTO> {
    const [data] = await this._db
      .update(users)
      .set({
        ...user,
      })
      .where(eq(users.userId, id))
      .returning();

    if (!data) {
      throw new Error("Failed to update user");
    }

    const response = UserDTO.response(data);

    return response;
  }

  async deleteUser(id: string): Promise<UserDTO> {
    const [data] = await this._db
      .delete(users)
      .where(eq(users.userId, id))
      .returning();

    if (!data) {
      throw new Error("Failed to delete user");
    }

    const response = UserDTO.response(data);

    return response;
  }

  async getUser(userId: string): Promise<UserDTO> {
    const [data] = await db
      .delete(users)
      .where(eq(users.userId, userId))
      .returning();

    if (!data) {
      throw new Error("Failed to get user");
    }

    const response = UserDTO.response(data);

    return response;
  }

  async getUsers(): Promise<UserDTO[]> {
    const data = await db.select().from(users);

    if (!data) {
      throw new Error("Failed to get users");
    }

    const response = data.map((user) => UserDTO.response(user));

    return response;
  }

  async updateCount(userId: string, count: number): Promise<UserDTO> {
    const [data] = await this._db
      .update(users)
      .set({
        count,
      })
      .where(eq(users.userId, userId))
      .returning();

    if (!data) {
      throw new Error("Failed to update count");
    }

    const response = UserDTO.response(data);

    return response;
  }
}
