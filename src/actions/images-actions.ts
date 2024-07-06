"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { ZSAError } from "zsa";

import { ServiceLocator } from "@/backend/services/server-locator/service-locator";
import { authProcedure } from "@/backend/utilities/procedures";
import { updateCount } from "@/lib/utils";

export const generateImagesAction = authProcedure
  .createServerAction()
  .input(
    z.object({
      value: z.string(),
    }),
  )
  .handler(async ({ input, ctx }) => {
    try {
      const { user, isFreeTrial, isPremium } = ctx;

      if (!user) {
        throw new Error("User not found");
      }

      if (!isFreeTrial && !isPremium) {
        throw new Error("API limit reached");
      }

      const imagesService = ServiceLocator.getService("ImagesService");

      const data = await imagesService.generateImages(input.value);

      if (!isPremium) {
        await updateCount();
      }

      revalidatePath("/", "layout");

      return data;
    } catch (error) {
      throw new ZSAError("ERROR", error);
    }
  });
