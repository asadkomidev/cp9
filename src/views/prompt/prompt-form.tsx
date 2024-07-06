import React from "react";
import PromptInput from "./prompt-input";
import PromptButton from "./prompt-button";
import PromptPlaceholder from "./prompt-placeholder";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  setValue: (value: string) => void;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  animating: boolean;
  loading: boolean;
  currentPlaceholder: number;
  placeholders: string[];
  isDark?: boolean;
};

const PromptForm = ({
  value,
  setValue,
  inputRef,
  onChange,
  handleKeyDown,
  handleSubmit,
  animating,
  loading,
  currentPlaceholder,
  placeholders,
  isDark,
}: Props) => {
  return (
    <form
      id="prompt-form"
      className={cn(
        "w-full relative  mx-auto h-full pb-6 pt-2 transition duration-200",
        value && "",
      )}
      onSubmit={handleSubmit}
    >
      <PromptInput
        animating={animating}
        loading={loading}
        value={value}
        setValue={setValue}
        inputRef={inputRef}
        onChange={onChange}
        handleKeyDown={handleKeyDown}
        isDark={isDark}
      />

      <div className="absolute bottom-4">
        <kbd className="text-xs text-neutral-400">
          Press <kbd>Enter</kbd> to generate
        </kbd>
      </div>

      <PromptButton value={value} id="prompt-form" />

      <PromptPlaceholder
        loading={loading}
        value={value}
        currentPlaceholder={currentPlaceholder}
        placeholders={placeholders}
      />
    </form>
  );
};

export default PromptForm;
