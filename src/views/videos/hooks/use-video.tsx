import { create } from "zustand";

type State = {
  video: string;
  setVideo: (video: string) => void;
};

export const useVideo = create<State>((set) => ({
  video: "",
  setVideo: (video) => set({ video }),
}));
