import { useCode } from "./use-code";
import { useLoading } from "@/hooks/use-loading";
import { useUpgrade } from "@/hooks/use-upgrade";

import { toast } from "sonner";
import { generateCodeAction } from "@/actions/code-actions";
import { CodeSchemaType } from "@/backend/utilities/schemas";

export const useCodePrompt = () => {
  const { setMessages, messages } = useCode();
  const { setLoading } = useLoading();
  const { onOpen } = useUpgrade();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};
  const onSubmit = async (value: string) => {
    const userMessage: CodeSchemaType = {
      role: "user",
      content: value,
    };

    setMessages([...messages, userMessage]);
    const newMessages = [...messages, userMessage];
    setLoading(true);

    const [data, error] = await generateCodeAction(newMessages);

    if (error) {
      setMessages([]);
      if (error.message === "API limit reached") {
        onOpen();
      } else {
        toast.error("Failed to generate text");
      }

      setLoading(false);
    } else {
      const responseMessage: CodeSchemaType = {
        role: "assistant",
        content: data?.content || "",
      };

      setMessages([...messages, userMessage, responseMessage]);
      setLoading(false);
    }
  };

  return {
    handleChange,
    onSubmit,
  };
};
