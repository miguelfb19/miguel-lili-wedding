import { create } from "zustand";

interface MobileStore {
  isMobile: boolean;
}

export const useIsMobileStore = create<MobileStore>(() => ({
  // Calculate dinamicatelly if viewport is mobile or desktop to use in different component and applicate respective animation
  isMobile: typeof window !== "undefined" && window.innerWidth < 640,
}));
