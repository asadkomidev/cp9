import { useLoading } from "@/hooks/use-loading";

import { useVideo } from "./use-video";

type Props = {
  promptRef: React.RefObject<HTMLDivElement>;
};

export const useDisplay = ({ promptRef }: Props) => {
  const { video } = useVideo();
  const { loading } = useLoading();

  return {
    video,
    loading,

    promptRef,
  };
};
