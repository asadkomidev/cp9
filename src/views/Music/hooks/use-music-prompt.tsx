import { useLoading } from "@/hooks/use-loading";
import { useMusic } from "./use-music";
import { useUpgrade } from "@/hooks/use-upgrade";

import { toast } from "sonner";
import { generateMusicAction } from "@/actions/music-actions";

export const useMusicPrompt = () => {
  const { setMusic } = useMusic();
  const { setLoading } = useLoading();
  const { onOpen } = useUpgrade();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};

  const onSubmit = async (value: string) => {
    setLoading(true);
    setMusic(undefined || "");

    const [data, error] = await generateMusicAction({ value });

    if (error) {
      setMusic("");
      setLoading(false);
      if (error.message === "API limit reached") {
        onOpen();
      } else {
        toast.error("Failed to generate music");
      }
    } else {
      setMusic(data || "");
      setLoading(false);
    }
  };

  return {
    handleChange,
    onSubmit,
  };
};
