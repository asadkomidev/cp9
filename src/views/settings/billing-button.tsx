"use client";

import { checkout } from "@/backend/utilities/checkout";
import { Button } from "@/components/ui/button";

type Props = {
  isPremium: boolean;
};

const BillingButton = ({ isPremium }: Props) => {
  const onClick = async () => {
    const url = await checkout();
    if (url) {
      window.location.href = url;
    }
  };
  return (
    <Button onClick={onClick}>
      {isPremium ? "Manage Subscription" : "Upgrade"}
    </Button>
  );
};

export default BillingButton;
