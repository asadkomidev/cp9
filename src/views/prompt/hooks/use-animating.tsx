import { create } from "zustand";

type State = {
  animating: boolean;
  setAnimating: (animating: boolean) => void;
};

export const useAnimating = create<State>((set) => ({
  animating: false,
  setAnimating: (animating) => set({ animating }),
}));
