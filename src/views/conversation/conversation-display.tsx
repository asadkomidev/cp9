"use client";

import { useRef } from "react";

import ConversationCard from "./conversation-card";
import ConversationLoading from "./conversation-loading";
import { useDisplay } from "./hooks/use-display";
import Empty from "@/components/empty";
import ConversationEmpty from "./empty";

type Props = {};

const ConversationDisplay = (props: Props) => {
  const promptRef = useRef<HTMLDivElement>(null);
  const { messages, loading, isLast } = useDisplay({ promptRef });

  return (
    <div className="no-scrollbar relative h-full overflow-y-scroll py-12 pt-24">
      {messages.length === 0 ? (
        <div className="h-[60vh]">
          <ConversationEmpty />
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <div key={index} className="flex gap-6">
              {message.role === "assistant" ? (
                <div className="" ref={isLast ? promptRef : null}>
                  <ConversationCard
                    role={message.role}
                    content={message.content as string}
                    className="mb-8 w-full max-w-3xl py-6"
                  />
                </div>
              ) : (
                <ConversationCard
                  content={message.content as string}
                  className="max-w-1/2 ml-auto rounded-xl bg-muted px-4 py-2 text-end"
                />
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-6" ref={isLast ? promptRef : null}>
              <ConversationLoading
                role="assistant"
                content="Generating response ..."
                className="max-w-xl py-6"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ConversationDisplay;
