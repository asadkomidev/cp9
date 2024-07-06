import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { HistoryIcon, MoveUpRight } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ToolCard from "./tools-card";

interface Tool {
  id: number;
  label: string;
  href: string;
  icon: any;
}

type Props = {
  tools: Tool[];
  title?: string;
  description?: string;
};

const History = ({ tools, title, description }: Props) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <HistoryIcon />
      </DrawerTrigger>
      <DrawerContent className=" pb-24">
        <div className=" flex flex-col sm:flex-row items-start gap-12 w-full px-12 ">
          <div className=" w-full">
            <div className="grid gap-1.5 p-4 text-center">
              <p className="text-lg font-semibold leading-none tracking-tight">
                {title}
              </p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="flex items-center justify-center h-56 ">
              <Image
                src="/s.svg"
                width={200}
                height={200}
                alt="avatar"
                className="text-gray-500"
                priority
              />
            </div>
          </div>
          <div className="pt-4 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default History;
