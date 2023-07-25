import { create } from "zustand";

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void; // Use "void" instead of "{}" for functions without a return value
  onClose: () => void; // Use "void" instead of "{}" for functions without a return value
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false, 
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
