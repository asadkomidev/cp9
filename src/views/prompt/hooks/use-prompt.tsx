import { useLoading } from "@/hooks/use-loading";
import { usePlaceholders } from "./use-placeholders";
import { useRef } from "react";
import { useValue } from "./use-value";
import { useAnimating } from "./use-animating";
import { useDraw } from "./use-draw";
import { useAnimate } from "./use-animate";
import { useVanishSubmit } from "./use-vanish-submit";

export const usePrompt = (placeholders: string[]) => {
  const { loading } = useLoading();
  const currentPlaceholder = usePlaceholders(placeholders);

  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { value, setValue } = useValue();
  const { animating, setAnimating } = useAnimating();

  const draw = useDraw({
    value,
    canvasRef: useRef<HTMLCanvasElement>(null),
    newDataRef,
    inputRef,
  });

  const animate = useAnimate({
    canvasRef: useRef<HTMLCanvasElement>(null),
    newDataRef,
    setValue,
    setAnimating,
  });

  const vanishAndSubmit = useVanishSubmit({
    draw,
    animate,
    setAnimating,
    inputRef,
    newDataRef,
  });

  return {
    loading,
    currentPlaceholder,
    inputRef,
    value,
    setValue,
    animating,
    setAnimating,
    vanishAndSubmit,
    newDataRef,
  };
};
