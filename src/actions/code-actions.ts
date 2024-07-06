"use server";

import { revalidatePath } from "next/cache";
import { ZSAError } from "zsa";

import { ServiceLocator } from "@/backend/services/server-locator/service-locator";
import { updateCountHelper } from "@/backend/utilities/helpers/helpers";
import { authProcedure } from "@/backend/utilities/procedures";
import { InsertCodeSchema } from "@/backend/utilities/schemas";

export const generateCodeAction = authProcedure
  .createServerAction()
  .input(InsertCodeSchema)
  .handler(async ({ input, ctx }) => {
    try {
      const { user, isFreeTrial, isPremium } = ctx;

      if (!user) {
        throw new Error("User not found");
      }

      if (!isFreeTrial && !isPremium) {
        throw new Error("API limit reached");
      }

      const codeService = ServiceLocator.getService("CodeService");

      const data = await codeService.generateCode(input);

      if (!isPremium) {
        await updateCountHelper();
      }

      revalidatePath("/", "layout");

      return data;
    } catch (error) {
      throw new ZSAError("ERROR", error);
    }
  });
