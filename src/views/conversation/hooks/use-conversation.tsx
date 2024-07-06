import { ConversationSchemaType } from "@/backend/utilities/schemas";
import { create } from "zustand";

type State = {
  messages: ConversationSchemaType[];
  setMessages: (messages: ConversationSchemaType[]) => void;
};

export const useConversation = create<State>((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
