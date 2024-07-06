"use client";

import { Prompt } from "./prompt";
import ConversationDisplay from "./conversation-display";
import { TOOLS } from "@/global/constants/navigation";
import History from "@/components/history";

type Props = {};

const Conversation = (props: Props) => {
  const tools = TOOLS.filter((tool) => tool.label !== "Conversation");
  return (
    <div className="h-screen">
      <div className="fixed top-4 z-50">
        <History
          title="Conversation history"
          description=" Currently we do not support conversation history feature. We are
                working on it."
          tools={tools}
        />
      </div>
      <div className="h-[90vh] w-full">
        <ConversationDisplay />
      </div>
      <div className="relative h-[10vh] w-full">
        <div className="absolute bottom-6 w-full">
          <Prompt />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
