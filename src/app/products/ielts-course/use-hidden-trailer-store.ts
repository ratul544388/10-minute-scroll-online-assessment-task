import { create } from "zustand";

interface HiddenTrailerStore {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
}

export const useHiddenTrailerStore = create<HiddenTrailerStore>((set) => ({
  isHidden: false,
  setIsHidden: (isHidden) => set(() => ({ isHidden })),
}));
