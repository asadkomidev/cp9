import { ISubscriptionRepository } from "../repositories";

export class SubscriptionService {
  constructor(private _subscriptionRepo: ISubscriptionRepository) {}

  async checkSubscription(userId: string): Promise<boolean> {
    const data = await this._subscriptionRepo.checkSubscription(userId);
    return data;
  }
}
