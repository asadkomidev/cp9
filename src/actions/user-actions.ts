"use server";

import { z } from "zod";

import { UserDTO } from "@/backend/dtos/user-dto";

import { authProcedure } from "@/backend/utilities/procedures";
import { ServiceLocator } from "@/backend/services/server-locator/service-locator";
import { userSchema } from "@/backend/utilities/schemas";

export const createUserAction = authProcedure
  .createServerAction()
  .input(userSchema)
  .handler(async ({ input, ctx }) => {
    const userService = ServiceLocator.getService("UserService");
    const data = await userService.createUser({
      ...input,
    } as UserDTO);

    return data;
  });

export const updateUserAction = authProcedure
  .createServerAction()
  .input(userSchema)
  .handler(async ({ input, ctx }) => {
    const userService = ServiceLocator.getService("UserService");
    const data = await userService.updateUser(
      {
        ...input,
      } as Partial<UserDTO>,
      input.userId,
    );

    return data;
  });

export const deleteUserAction = authProcedure
  .createServerAction()
  .input(
    z.object({
      userId: z.string(),
    }),
  )
  .handler(async ({ input, ctx }) => {
    const userService = ServiceLocator.getService("UserService");
    const data = await userService.deleteUser(input.userId);

    return data;
  });

export const getUserAction = authProcedure
  .createServerAction()
  .input(userSchema)
  .handler(async ({ input, ctx }) => {
    const userService = ServiceLocator.getService("UserService");
    const data = await userService.getUser(input.userId);

    return data;
  });

export const getUsersAction = authProcedure
  .createServerAction()
  .handler(async ({ ctx }) => {
    const userService = ServiceLocator.getService("UserService");
    const data = await userService.getUsers();

    return data;
  });
