import { create } from "zustand";
import { CodeSchemaType } from "@/backend/utilities/schemas";

type State = {
  messages: CodeSchemaType[];
  setMessages: (messages: CodeSchemaType[]) => void;
};

export const useCode = create<State>((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
