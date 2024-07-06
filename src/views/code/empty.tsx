"use client";

import { Card } from "@/components/ui/card";
import { CODE_EMPTY } from "@/global/constants/empty";
import { useCodePrompt } from "./hooks/use-code_prompt";

type Props = {};

const CodeEmpty = (props: Props) => {
  const { onSubmit } = useCodePrompt();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl">
      <div className="no-scrollbar grid grid-cols-2 gap-4 overflow-y-scroll sm:px-24 md:grid-cols-3 lg:grid-cols-4">
        {CODE_EMPTY.map((prompt) => (
          <Card
            onClick={() => onSubmit(prompt.prompt)}
            key={prompt.id}
            className="flex h-32 cursor-pointer flex-col justify-between border-none bg-primary px-4 py-6 shadow-none transition duration-200 hover:bg-primary/90 hover:shadow-lg"
          >
            <div className="text-sm text-white/80">{prompt.prompt}</div>
            <div className="flex items-center justify-end">
              <prompt.icon
                size={20}
                strokeWidth={1}
                className="text-white/80"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CodeEmpty;
