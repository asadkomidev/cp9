import React from "react";
import { Textarea } from "./prompt-textarea";
import { cn } from "@/lib/utils";

type Props = {
  animating: boolean;
  loading: boolean;
  value: string;
  setValue: (value: string) => void;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  isDark?: boolean;
};

const PromptInput = ({
  animating,
  loading,
  value,
  setValue,
  inputRef,
  onChange,
  handleKeyDown,
  isDark,
}: Props) => {
  return (
    <Textarea
      onChange={(e) => {
        if (!animating) {
          setValue(e.target.value);
          onChange && onChange(e);
        }
      }}
      rows={4}
      onKeyDown={handleKeyDown}
      ref={inputRef}
      value={value}
      disabled={loading}
      className={cn(
        "resize-none w-full font-light mb-6 flex items-start justify-start  relative text-sm  z-50 border-none  focus:outline-none focus:ring-0 no-scrollbar",
        isDark && "text-white/80 ",
      )}
    />
  );
};

export default PromptInput;
