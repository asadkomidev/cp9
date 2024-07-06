"use client";

import { PromptDisplay } from "../prompt/prompt-display";
import { IMAGE_PLACEHOLDER } from "@/global/constants/placeholder";
import { useImagePrompt } from "./hooks/use-image-prompt";

export function Prompt() {
  const { handleChange, onSubmit } = useImagePrompt();
  return (
    <div className="mt-8 flex min-h-24 w-full justify-center gap-4 rounded-xl shadow-lg">
      <PromptDisplay
        placeholders={IMAGE_PLACEHOLDER}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="bg-primary"
        isDark
      />
    </div>
  );
}
