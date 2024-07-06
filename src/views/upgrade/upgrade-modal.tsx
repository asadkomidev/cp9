"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useUpgrade } from "@/hooks/use-upgrade";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useLoading } from "@/hooks/use-loading";
import { checkout } from "@/backend/utilities/checkout";

type Props = {};

const features = [
  {
    id: 1,
    label: "Unlimited generations",
  },
  {
    id: 2,
    label: "Unlimited downloads",
  },
  {
    id: 3,
    label: "Unlimited access",
  },
  {
    id: 4,
    label: "Unlimited support",
  },
];

const UpgradeModal = (props: Props) => {
  const { isOpen, onClose } = useUpgrade();
  const { loading, setLoading } = useLoading();

  const onUpgrade = async () => {
    setLoading(true);
    const response = await checkout();
    if (response) {
      window.location.href = response;
    }
    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="w-[400px] rounded-lg sm:w-full">
        <div className="flex w-full flex-col px-4 py-6 sm:px-24">
          <h1 className="text-center text-2xl font-bold">Premium</h1>
          <div className="py-4">
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-bold">$20</span>
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                /mo
              </span>
            </div>
          </div>
          <Button
            onClick={onUpgrade}
            disabled={loading}
            className="w-full rounded-full"
          >
            Upgrade now
          </Button>
          <div className="py-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex">
                <div className="flex items-center gap-4">
                  <div className={cn("w-fit rounded-md")}>
                    <Check className="text-green-500" />
                  </div>
                  <div>{feature.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeModal;
