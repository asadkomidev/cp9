import Logo from "@/global/navigation/logo";
import BillingButton from "./billing-button";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/global/constants/features";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAuthUser } from "@/backend/utilities/utils";
import { use } from "react";
import Image from "next/image";

type Props = {
  isPremium: boolean;
};

const Settings = async ({ isPremium }: Props) => {
  const { user } = await getAuthUser();

  return (
    <div className="relative">
      <div className="fixed top-3 z-50">
        <Logo />
      </div>
      <div className="h-screen pt-32">
        <div className="flex flex-col items-start gap-6 rounded-xl border p-6 md:flex-row">
          <div className="flex w-full flex-col pb-6 pr-24">
            <h1 className="text-xl font-bold">
              <span className="flex flex-col gap-6 py-6">
                {isPremium
                  ? "You are currently on a premium plan"
                  : "You are currently on a free plan"}
              </span>
            </h1>
            <div className="py-4">
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold">$20</span>
                <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                  /mo
                </span>
              </div>
            </div>
            <BillingButton isPremium={isPremium} />
            <div className="py-4">
              {FEATURES.map((feature) => (
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
          <div className="w-full py-6">
            <h1 className="pb-6 text-xl font-bold">Account</h1>
            <div className="flex flex-col gap-6 rounded-md">
              <div className="flex items-center justify-between">
                <div className="">
                  <Image
                    src={user?.picture || "/placeholder.png"}
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="text-gray-500">Name</div>
                  <div>
                    {user?.given_name} {user?.family_name}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-500">Email</div>
                  <div>{user?.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
