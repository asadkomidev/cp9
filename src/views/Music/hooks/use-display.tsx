import { useLoading } from "@/hooks/use-loading";

import { useMusic } from "./use-music";

type Props = {
  promptRef: React.RefObject<HTMLDivElement>;
};

export const useDisplay = ({ promptRef }: Props) => {
  const { music } = useMusic();
  const { loading } = useLoading();

  return {
    music,
    loading,
    promptRef,
  };
};
