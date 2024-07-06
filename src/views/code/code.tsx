"use client";

import History from "@/components/history";

import { TOOLS } from "@/global/constants/navigation";
import ChatBox from "./chat-box";
import { Prompt } from "./prompt";

type Props = {};

const Code = (props: Props) => {
  const tools = TOOLS.filter((tool) => tool.label !== "Code");
  return (
    <div className="h-screen">
      <div className="fixed top-4 z-50">
        <History
          title="Code history"
          description=" Currently we do not support code history feature. We are
                working on it."
          tools={tools}
        />
      </div>
      <div className="h-[90vh] w-full">
        <ChatBox />
      </div>
      <div className="relative h-[10vh] w-full">
        <div className="absolute bottom-6 w-full">
          <Prompt />
        </div>
      </div>
    </div>
  );
};

export default Code;
