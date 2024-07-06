import { create } from "zustand";

type State = {
  value: string;
  setValue: (value: string) => void;
};

export const useValue = create<State>((set) => ({
  value: "",
  setValue: (value) => set({ value }),
}));
