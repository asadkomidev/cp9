import { create } from "zustand";

type State = {
  music: string | undefined;
  setMusic: (music: string) => void;
};

export const useMusic = create<State>((set) => ({
  music: undefined,
  setMusic: (music) => set({ music }),
}));
