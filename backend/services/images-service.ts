import { Image } from "openai/resources/images.mjs";

import { IImageRepository } from "../repositories";

export class ImagesService {
  constructor(private _imagesRepository: IImageRepository) {}

  async generateImages(value: string): Promise<Image[]> {
    const data = await this._imagesRepository.generateImages(value);

    return data;
  }
}
