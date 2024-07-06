import { IConversationRepository } from ".";

import { openai } from "../utilities/config/openai";
import { ConversationSchemaType } from "../utilities/schemas";

export class ConversationRepository implements IConversationRepository {
  constructor() {}

  async generateConversation(value: ConversationSchemaType[]): Promise<string> {
    try {
      const data = await openai.chat.completions.create({
        messages: value,
        model: "gpt-4o",
      });

      return data.choices[0]?.message?.content || "";
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
