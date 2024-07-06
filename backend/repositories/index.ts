import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { UserDTO } from "../dtos/user-dto";

import { ChatCompletionMessage, Image } from "openai/resources/index.mjs";
import { CodeSchemaType, ConversationSchemaType } from "../utilities/schemas";

export interface IUserRepository {
  createUser: (user: UserDTO) => Promise<UserDTO>;
  updateUser: (user: Partial<UserDTO>, id: string) => Promise<UserDTO>;
  deleteUser: (id: string) => Promise<UserDTO>;
  getUser: (userId: string) => Promise<UserDTO>;
  getUsers: () => Promise<UserDTO[]>;
  updateCount: (userId: string, count: number) => Promise<UserDTO>;
}

export interface IConversationRepository {
  generateConversation: (value: ConversationSchemaType[]) => Promise<string>;
}

export interface ICodeRepository {
  generateCode: (
    value: CodeSchemaType[],
  ) => Promise<ChatCompletionMessage | null>;
}

export interface IImageRepository {
  generateImages: (value: string) => Promise<Image[]>;
}

export interface IMusicRepository {
  generateMusic: (value: string) => Promise<string>;
}

export interface IVideoRepository {
  generateVideo: (value: string) => Promise<string>;
}

export interface IHelpersRepository {
  updateCountHelper: (user: KindeUser) => Promise<void>;
  checkCountHelper: (userId: string) => Promise<boolean>;
  getCountHelper: (userId: string) => Promise<number>;
}

export interface ISubscriptionRepository {
  checkSubscription: (userId: string) => Promise<boolean>;
}
