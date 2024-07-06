import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BeatLoader } from "react-spinners";

type Props = {
  role?: string;
  content?: string;
  className?: string;
};

const ConversationLoading = ({ role, content, className }: Props) => {
  return (
    <div className={cn("flex items-start gap-4 w-full", className)}>
      {role && (
        <div className=" flex items-center justify-center">
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="avatar"
            className=""
          />
        </div>
      )}
      <div className="w-full">
        <span className="">
          <BeatLoader size={10} />
        </span>
      </div>
    </div>
  );
};

export default ConversationLoading;
