import { create } from "zustand";

type State = {
  images: string[];
  setImages: (messages: string[]) => void;
};

export const useImages = create<State>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
}));
