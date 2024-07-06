"use client";

import { cn } from "@/lib/utils";
import { usePrompt } from "./hooks/use-prompt";
import PromptForm from "./prompt-form";

type Props = {
  isDark?: boolean;
  className?: string;
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (value: string) => void;
};

export function PromptDisplay({
  isDark,
  className,
  placeholders,
  onChange,
  onSubmit,
}: Props) {
  const {
    loading,
    currentPlaceholder,
    inputRef,
    value,
    setValue,
    animating,
    vanishAndSubmit,
  } = usePrompt(placeholders);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit();

      onSubmit && onSubmit(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();

    onSubmit && onSubmit(value);
  };
  return (
    <div className={cn("w-full  items-center px-4 rounded-xl", className)}>
      <PromptForm
        value={value}
        setValue={setValue}
        inputRef={inputRef}
        onChange={onChange}
        handleKeyDown={handleKeyDown}
        handleSubmit={handleSubmit}
        animating={animating}
        loading={loading}
        currentPlaceholder={currentPlaceholder}
        placeholders={placeholders}
        isDark={isDark}
      />
    </div>
  );
}
