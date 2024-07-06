import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div className="">
      <Link href="/" className={cn("flex items-center", className)}>
        <div className="flex items-center">
          <span className="text-2xl font-semibold">
            cp9
            <span className="text-xs text-[#ffaa40]">ai</span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
