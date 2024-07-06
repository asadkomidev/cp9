import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Tool {
  id: number;
  label: string;
  href: string;
  icon: any;
}

type Props = {
  tool: Tool;
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
      className=""
    >
      <Button
        key={tool.id}
        asChild
        className="shadow-none rounded-full"
        variant="outline"
      >
        <Link className=" flex items-center gap-2" href={tool.href}>
          <span className="">{tool.label}</span>
          <MoveUpRight className="w-3 h-3" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default ToolCard;
