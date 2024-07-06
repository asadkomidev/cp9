"use client";

import { PromptDisplay } from "../prompt/prompt-display";
import { useConversationPrompt } from "./hooks/use-conversation-prompt";
import { CONVERSATION_PLACEHOLDER } from "@/global/constants/placeholder";

export function Prompt() {
  const { handleChange, onSubmit } = useConversationPrompt();

  return (
    <div className="mt-8 flex min-h-24 w-full flex-wrap justify-center gap-4 rounded-xl shadow-lg">
      <PromptDisplay
        placeholders={CONVERSATION_PLACEHOLDER}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="bg-primary"
        isDark
      />
    </div>
  );
}
