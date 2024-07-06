import { useLoading } from "@/hooks/use-loading";
import { useEffect } from "react";
import { useImages } from "./use-images";

type Props = {
  promptRef: React.RefObject<HTMLDivElement>;
};

export const useDisplay = ({ promptRef }: Props) => {
  const { images } = useImages();
  const { loading } = useLoading();

  const isLast = images.length - 1;

  useEffect(() => {
    if (isLast) {
      promptRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLast, promptRef]);

  return {
    images,
    loading,
    isLast,
    promptRef,
  };
};
