"use server";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { ZSAError } from "zsa";

import { ServiceLocator } from "@/backend/services/server-locator/service-locator";
import { authProcedure } from "@/backend/utilities/procedures";

export const updateCountHelper = authProcedure
  .createServerAction()
  .handler(async ({ ctx }): Promise<void> => {
    try {
      const { user } = ctx;
      const helpersService = ServiceLocator.getService("HelpersService");
      const response = await helpersService.updateCountHelper(
        user as KindeUser,
      );

      return response;
    } catch (error) {
      throw new ZSAError("ERROR", error);
    }
  });

export const checkCountHelper = authProcedure
  .createServerAction()
  .handler(async ({ ctx }) => {
    try {
      const { user } = ctx;
      if (!user) {
        return false;
      }

      const helpersService = ServiceLocator.getService("HelpersService");

      const response = await helpersService.checkCountHelper(user.id!);

      return response;
    } catch (error) {
      throw new ZSAError("ERROR", error);
    }
  });

export const getCountHelper = authProcedure
  .createServerAction()
  .handler(async ({ ctx }): Promise<number> => {
    try {
      const { user } = ctx;
      if (!user) {
        return 0;
      }

      const helpersService = ServiceLocator.getService("HelpersService");
      const response = await helpersService.getCountHelper(user.id!);

      return response;
    } catch (error) {
      throw new ZSAError("ERROR", error);
    }
  });

export const checkSubscriptionHelper = authProcedure
  .createServerAction()
  .handler(async ({ ctx }) => {
    try {
      const { user } = ctx;
      if (!user) {
        return false;
      }

      const subscriptionService = ServiceLocator.getService(
        "SubscriptionService",
      );
      const response = await subscriptionService.checkSubscription(user.id!);

      return response;
    } catch (error) {
      throw new ZSAError("ERROR", error);
    }
  });
