import { create } from "zustand";

interface ViewsStore {
  view: "init" | "main";
  setView: (view: "init" | "main") => void;
}

export const useViewsStore = create<ViewsStore>((set) => ({
  // change view to initial banner or main content
  view: "init",
  // Add a method to change the view
  setView: (view: "init" | "main") => set({ view }),
}));
