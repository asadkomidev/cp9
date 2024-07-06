"use client";

import { useUpgrade } from "@/hooks/use-upgrade";
import { type AnimationProps, motion } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

const UpgradeButton = ({ text = "shiny-button" }) => {
  const { onOpen } = useUpgrade();

  return (
    <motion.button
      onClick={onOpen}
      {...animationProps}
      className="relative w-full rounded-full bg-primary px-4 py-1 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]"
    >
      <span
        className="relative block h-full w-full text-center text-sm text-white dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        <span className="flex w-full items-center gap-2">
          <span className="text-lg">✨</span>
          <span className="text-xs sm:text-sm">{text}</span>
        </span>
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(255,255,255), rgb(255,255,255)) content-box,linear-gradient(rgb(255,255,255), rgb(255,255,255)",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default UpgradeButton;
