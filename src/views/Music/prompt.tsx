"use client";

import { PromptDisplay } from "../prompt/prompt-display";
import { useMusicPrompt } from "./hooks/use-music-prompt";
import { AUDIO_PLACEHOLDER } from "@/global/constants/placeholder";

export function Prompt() {
  const { handleChange, onSubmit } = useMusicPrompt();
  return (
    <div className="mt-8 flex min-h-24 w-full justify-center gap-4 rounded-xl shadow-lg">
      <PromptDisplay
        placeholders={AUDIO_PLACEHOLDER}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="bg-primary"
        isDark
      />
    </div>
  );
}
