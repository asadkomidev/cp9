import { ICodeRepository } from ".";

import { openai } from "../utilities/config/openai";
import { CodeSchemaType } from "../utilities/schemas";

export class CodeRepository implements ICodeRepository {
  constructor() {}

  async generateCode(value: CodeSchemaType[]) {
    try {
      const data = await openai.chat.completions.create({
        messages: value,
        model: "gpt-4o",
      });

      return data.choices[0]?.message ? data.choices[0].message : null;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
