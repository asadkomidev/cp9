import { IConversationRepository } from "../repositories";
import { ConversationSchemaType } from "../utilities/schemas";

export class ConversationService {
  constructor(private _conversationRepo: IConversationRepository) {}

  async generateConversation(value: ConversationSchemaType[]): Promise<string> {
    const data = await this._conversationRepo.generateConversation(value);

    return data;
  }
}
