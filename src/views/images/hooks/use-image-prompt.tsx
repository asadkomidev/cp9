import { useLoading } from "@/hooks/use-loading";
import { useUpgrade } from "@/hooks/use-upgrade";

import { toast } from "sonner";
import { useImages } from "./use-images";
import { generateImagesAction } from "@/actions/images-actions";

export const useImagePrompt = () => {
  const { setImages } = useImages();
  const { setLoading } = useLoading();
  const { onOpen } = useUpgrade();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};

  const onSubmit = async (value: string) => {
    setLoading(true);
    setImages([]);

    const [data, error] = await generateImagesAction({ value });

    if (error) {
      setLoading(false);
      setImages([]);
      if (error.message === "API limit reached") {
        onOpen();
      } else {
        toast.error("Failed to generate text");
      }
    } else {
      const urls = data.map((image: any) => image.url || "");

      setImages(urls || []);
      setLoading(false);
    }
  };

  return {
    handleChange,
    onSubmit,
  };
};
