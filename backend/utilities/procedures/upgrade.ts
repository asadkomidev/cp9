import { ServiceLocator } from "@/backend/services/server-locator/service-locator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createServerActionProcedure } from "zsa";

export const upgradeProcedure = createServerActionProcedure().handler(
  async () => {
    try {
      const { getUser } = getKindeServerSession();
      const user = await getUser();
      if (!user) {
        throw new Error("User not found");
      }

      const subscriptionService = ServiceLocator.getService(
        "SubscriptionService",
      );
      const isPremium = await subscriptionService.checkSubscription(user?.id);

      const helpersService = ServiceLocator.getService("HelpersService");
      const isFreeTrial = await helpersService.checkCountHelper(user?.id);

      return { isFreeTrial, isPremium };
    } catch (error: any) {
      throw new Error(error);
    }
  },
);
