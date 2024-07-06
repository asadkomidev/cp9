import { Image } from "openai/resources/images.mjs";

import { openai } from "../utilities/config/openai";
import { IImageRepository } from ".";

export class ImagesRepository implements IImageRepository {
  constructor() {}

  async generateImages(value: string): Promise<Image[]> {
    try {
      const data = await openai.images.generate({
        model: "dall-e-2",
        prompt: value,
        size: "1024x1024",
        n: 4,
      });

      return data.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
