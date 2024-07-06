import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { IHelpersRepository } from "../repositories";

export class HelpersService {
  constructor(private _helpersRepo: IHelpersRepository) {}

  async updateCountHelper(user: KindeUser): Promise<void> {
    return await this._helpersRepo.updateCountHelper(user);
  }

  async checkCountHelper(userId: string): Promise<boolean> {
    return await this._helpersRepo.checkCountHelper(userId);
  }

  async getCountHelper(userId: string): Promise<number> {
    return await this._helpersRepo.getCountHelper(userId);
  }
}
