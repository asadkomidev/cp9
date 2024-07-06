"use client";

import { CODE_PLACEHOLDER } from "@/global/constants/placeholder";
import { PromptDisplay } from "../prompt/prompt-display";
import { useCodePrompt } from "./hooks/use-code_prompt";

export function Prompt() {
  const { handleChange, onSubmit } = useCodePrompt();

  return (
    <div className="mt-8 flex min-h-24 w-full justify-center gap-4 rounded-xl shadow-lg">
      <PromptDisplay
        placeholders={CODE_PLACEHOLDER}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="bg-primary"
        isDark
      />
    </div>
  );
}
