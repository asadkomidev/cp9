import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { History, MoveUpRight } from "lucide-react";
import Image from "next/image";
import ToolsLinks from "../home";
import ToolCard from "../home/tool-card";
import { TOOLS } from "../home/constants";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

type Props = {};

const ConversationHistory = (props: Props) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <History />
      </DrawerTrigger>
      <DrawerContent className=" pb-24">
        <div className=" flex flex-col sm:flex-row items-start gap-12 w-full px-12  ">
          <div className="">
            <div className="grid gap-1.5 p-4 text-center sm:text-left">
              <p className="text-lg font-semibold leading-none tracking-tight">
                Your conversation history
              </p>
              <p className="text-sm text-muted-foreground">
                Currently we do not support conversation history feature. We are
                working on it.
              </p>
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
          <div className="pt-6 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              {TOOLS.map((tool) => (
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
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ConversationHistory;
