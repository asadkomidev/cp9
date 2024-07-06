import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";
import Link from "next/link";

interface ToolProps {
  id: number;
  label: string;
  description: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

type Props = {
  tool: ToolProps;
};

const ToolCard = ({ tool }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        bounce: 0.7,
      }}
      key={tool.id}
      className="z-10 mt-5 rounded-2xl bg-background p-4 text-left shadow-sm"
    >
      <Link rel="noopener noreferrer" href={tool.href}>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-fit rounded-lg bg-primary p-1 text-white">
              <tool.icon size={18} className="" />
            </div>
            <div className="text-base font-medium text-gray-900 dark:text-gray-100 sm:text-lg">
              {tool.label}
            </div>
          </div>
          <div className="">
            <ArrowTopRightIcon />
          </div>
        </div>

        <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
          {tool.description}
        </div>
      </Link>
    </motion.div>
  );
};

export default ToolCard;
