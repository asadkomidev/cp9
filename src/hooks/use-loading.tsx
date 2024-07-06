import { create } from "zustand";

type State = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useLoading = create<State>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));
