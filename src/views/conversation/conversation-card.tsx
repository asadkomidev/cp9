import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  role?: string;
  content?: string;
  className?: string;
};

const ConversationCard = ({ role, content, className }: Props) => {
  return (
    <div className={cn("flex items-start gap-4", className)}>
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
        <article className="sm:leading-7 tracking-wide prose text-sm sm:text-base">
          {content}
        </article>
      </div>
    </div>
  );
};

export default ConversationCard;
