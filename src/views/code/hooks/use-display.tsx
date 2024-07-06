import { useLoading } from "@/hooks/use-loading";
import { useEffect } from "react";
import { useCode } from "./use-code";

type Props = {
  promptRef: React.RefObject<HTMLDivElement>;
};

export const useDisplay = ({ promptRef }: Props) => {
  const { messages } = useCode();
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
