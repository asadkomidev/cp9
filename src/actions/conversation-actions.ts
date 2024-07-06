"use server";

import { revalidatePath } from "next/cache";
import { ZSAError } from "zsa";

import { ServiceLocator } from "@/backend/services/server-locator/service-locator";
import { authProcedure } from "@/backend/utilities/procedures";
import { updateCount } from "@/lib/utils";
import { InsertConversationSchema } from "@/backend/utilities/schemas";

export const generateConversationAction = authProcedure
  .createServerAction()
  .input(InsertConversationSchema)
  .handler(async ({ input, ctx }) => {
    try {
      const { user, isFreeTrial, isPremium } = ctx;

      if (!user) {
        throw new Error("User not found");
      }

      if (!isFreeTrial && !isPremium) {
        throw new Error("API limit reached");
      }

      const conversationService = ServiceLocator.getService(
        "ConversationService",
      );

      const data = await conversationService.generateConversation(input);

      if (!isPremium) {
        await updateCount();
      }

      revalidatePath("/", "layout");

      return data;
    } catch (error) {
      throw new ZSAError("ERROR", error);
    }
  });
