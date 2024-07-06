import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  loading: boolean;
  value: string;
  currentPlaceholder: number;
  placeholders: string[];
};

const PromptPlaceholder = ({
  loading,
  value,
  currentPlaceholder,
  placeholders,
}: Props) => {
  return (
    <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
      {loading ? (
        <div className="dark:text-zinc-500 absolute top-3.5  text-sm sm:text-base font-thin text-neutral-500 text-left w-[calc(100%-2rem)] truncate">
          Generating ...
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="text-neutral-400 absolute top-3.5  text-sm sm:text-base font-thin   text-left w-[calc(100%-2rem)] "
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default PromptPlaceholder;
