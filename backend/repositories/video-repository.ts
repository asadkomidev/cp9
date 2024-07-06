import { IVideoRepository } from ".";
import { replicate } from "../utilities/config/replicate";

export class VideoRepository implements IVideoRepository {
  constructor() {}

  async generateVideo(value: string): Promise<string> {
    try {
      const data = await replicate.run(
        "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
        {
          input: {
            prompt: value,
          },
        },
      );

      const video = data as string[];

      return video[0];
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
