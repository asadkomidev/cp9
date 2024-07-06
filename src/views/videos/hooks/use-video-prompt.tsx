import { useLoading } from "@/hooks/use-loading";
import { useVideo } from "./use-video";
import { useUpgrade } from "@/hooks/use-upgrade";

import { toast } from "sonner";
import { generateVideoAction } from "@/actions/video-actions";

export const useVideoPrompt = () => {
  const { setVideo } = useVideo();
  const { setLoading } = useLoading();
  const { onOpen } = useUpgrade();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};

  const onSubmit = async (value: string) => {
    setLoading(true);
    setVideo(null || "");

    const [data, error] = await generateVideoAction({ value });

    if (error) {
      setLoading(false);
      setVideo(null || "");
      if (error.message === "API limit reached") {
        onOpen();
      } else {
        toast.error("Failed to generate video");
      }
    } else {
      setVideo(data || "");
      setLoading(false);
    }
  };

  return {
    handleChange,
    onSubmit,
  };
};
