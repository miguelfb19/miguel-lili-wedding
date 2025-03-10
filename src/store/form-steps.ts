import { create } from "zustand";

interface Steps {
  first: boolean;
  second: boolean;
  third: boolean;
}

interface FormStepsStore {
  steps: Steps;
  setFirst: () => void;
  setSecond: () => void;
  setThird: () => void;
}

export const useFormSteps = create<FormStepsStore>((set) => ({
  steps: {
    first: true,
    second: false,
    third: false,
  },
  setFirst: () =>
    set(() => ({
      steps: {
        first: true,
        second: false,
        third: false,
      },
    })),
  setSecond: () =>
    set(() => ({
      steps: {
        first: false,
        second: true,
        third: false,
      },
    })),
  setThird: () =>
    set(() => ({
      steps: {
        first: false,
        second: false,
        third: true,
      },
    })),
}));
