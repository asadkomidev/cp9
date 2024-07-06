import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createServerActionProcedure } from "zsa";

import { upgradeProcedure } from "./upgrade";

export const authProcedure = createServerActionProcedure(
  upgradeProcedure,
).handler(async ({ ctx }) => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();

  return {
    user,
    isAuth,
    ...ctx,
  };
});
