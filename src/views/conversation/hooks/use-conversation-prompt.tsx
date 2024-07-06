import { useLoading } from "@/hooks/use-loading";
import { useUpgrade } from "@/hooks/use-upgrade";

import { toast } from "sonner";
import { useConversation } from "./use-conversation";

import { generateConversationAction } from "@/actions/conversation-actions";
import { ConversationSchemaType } from "@/backend/utilities/schemas";

export const useConversationPrompt = () => {
  const { setMessages, messages } = useConversation();
  const { setLoading } = useLoading();
  const { onOpen } = useUpgrade();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};
  const onSubmit = async (value: string) => {
    const userMessage: ConversationSchemaType = {
      role: "user",
      content: value,
    };

    setMessages([...messages, userMessage]);
    const newMessages = [...messages, userMessage];
    setLoading(true);

    const [data, error] = await generateConversationAction(newMessages);

    if (error) {
      setMessages([]);
      if (error.message === "API limit reached") {
        onOpen();
      } else {
        toast.error("Failed to generate text");
      }

      setLoading(false);
    } else {
      const responseMessage: ConversationSchemaType = {
        role: "assistant",
        content: data,
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
