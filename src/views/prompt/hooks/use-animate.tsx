import { useRef, useState } from "react";
import { useValue } from "./use-value";
import { useAnimating } from "./use-animating";

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  newDataRef: React.RefObject<any[]>;
  setValue: (value: string) => void;
  setAnimating: (value: boolean) => void;
};

export const useAnimate = ({
  canvasRef,
  newDataRef,
  setValue,
  setAnimating,
}: Props) => {
  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        if (newDataRef.current) {
          for (let i = 0; i < newDataRef.current.length; i++) {
            const current = newDataRef.current[i];
            if (current.x < pos) {
              newArr.push(current);
            } else {
              if (current.r <= 0) {
                current.r = 0;
                continue;
              }
              current.x += Math.random() > 0.5 ? 1 : -1;
              current.y += Math.random() > 0.5 ? 1 : -1;
              current.r -= 0.05 * Math.random();
              newArr.push(current);
            }
          }
        }
        // @ts-ignore
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  return animate;
};
