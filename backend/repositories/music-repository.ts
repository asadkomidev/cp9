import { IMusicRepository } from ".";
import { replicate } from "../utilities/config/replicate";

export class MusicRepository implements IMusicRepository {
  constructor() {}

  async generateMusic(value: string): Promise<string> {
    try {
      const data = await replicate.run(
        "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
        {
          input: {
            prompt_a: value,
          },
        },
      );

      return (data as { audio: string }).audio;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
