import { checkSubscription } from "@/lib/utils";
import Settings from "@/views/settings/settings";

import React from "react";

type Props = {};

const Page = async (props: Props) => {
  const isPremium = await checkSubscription();

  return <Settings isPremium={isPremium} />;
};

export default Page;
