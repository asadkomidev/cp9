"use client";

import { PromptDisplay } from "../prompt/prompt-display";
import { VIDEO_PLACEHOLDER } from "@/global/constants/placeholder";
import { useVideoPrompt } from "./hooks/use-video-prompt";

export function Prompt() {
  const { handleChange, onSubmit } = useVideoPrompt();

  return (
    <div className="mt-8 flex min-h-24 w-full justify-center gap-4 rounded-xl shadow-lg">
      <PromptDisplay
        placeholders={VIDEO_PLACEHOLDER}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="bg-primary"
        isDark
      />
    </div>
  );
}
