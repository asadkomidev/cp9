import { useRef } from "react";
import ConversationLoading from "../conversation/conversation-loading";
import ConversationCard from "../conversation/conversation-card";
import { useDisplay } from "./hooks/use-display";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "@/styles/vs-dark";
import CodeEmpty from "./empty";

type Props = {};

const ChatBox = (props: Props) => {
  const promptRef = useRef<HTMLDivElement>(null);
  const { messages, loading, isLast } = useDisplay({ promptRef });
  return (
    <div className="no-scrollbar relative h-full overflow-y-scroll py-12 pt-24">
      {messages.length === 0 ? (
        <div className="h-[60vh]">
          <CodeEmpty />
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <div key={index} className="flex w-full gap-6">
              {message.role === "assistant" ? (
                <div
                  key={index}
                  className="w-2/3 pb-24"
                  ref={isLast ? promptRef : null}
                >
                  <ReactMarkdown
                    components={{
                      pre: ({ node, ...props }) => (
                        <div className="overflow-auto py-6 text-sm">
                          <pre {...props} />
                        </div>
                      ),
                      code({ node, ...props }) {
                        const match = /language-(\w+)/.exec(
                          props.className || "",
                        );

                        return match ? (
                          // @ts-ignore
                          <SyntaxHighlighter
                            {...props}
                            PreTag="div"
                            wrapLongLines={true}
                            language={match[1]}
                            style={vsDark as any}
                          >
                            {String(props.children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code {...props} className="" />
                        );
                      },
                    }}
                  >
                    {(message.content as string) || ""}
                  </ReactMarkdown>
                </div>
              ) : (
                <ConversationCard
                  content={message.content as string}
                  className="max-w-1/2 mb-4 ml-auto rounded-xl bg-muted px-4 py-2 text-end"
                />
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-6" ref={isLast ? promptRef : null}>
              <ConversationLoading
                role="assistant"
                content="Generating code ..."
                className="max-w-xl py-6"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ChatBox;
