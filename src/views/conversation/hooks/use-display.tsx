import { useEffect } from "react";

import { useLoading } from "@/hooks/use-loading";
import { useConversation } from "./use-conversation";

type Props = {
  promptRef: React.RefObject<HTMLDivElement>;
};

export const useDisplay = ({ promptRef }: Props) => {
  const { messages } = useConversation();
  const { loading } = useLoading();

  const isLast = messages.length - 1;

  useEffect(() => {
    if (isLast) {
      promptRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLast, promptRef]);

  return {
    messages,
    loading,
    isLast,
    promptRef,
  };
};
