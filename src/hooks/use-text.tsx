import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { create } from "zustand";

type State = {
  messages: ChatCompletionMessageParam[];
  setMessages: (messages: ChatCompletionMessageParam[]) => void;
};

export const useLText = create<State>((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
