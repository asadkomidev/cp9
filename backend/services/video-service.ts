import { IVideoRepository } from "../repositories";

export class VideoService {
  constructor(private _videoRepository: IVideoRepository) {}

  async generateVideo(value: string): Promise<string> {
    const data = await this._videoRepository.generateVideo(value);

    return data;
  }
}
