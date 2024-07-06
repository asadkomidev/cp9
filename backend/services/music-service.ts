import { IMusicRepository } from "../repositories";

export class MusicService {
  constructor(private _musicRepository: IMusicRepository) {}

  async generateMusic(value: string): Promise<string> {
    const data = await this._musicRepository.generateMusic(value);

    return data;
  }
}
