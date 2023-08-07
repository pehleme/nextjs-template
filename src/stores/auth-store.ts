import { create } from 'zustand';
import { devtools } from "zustand/middleware";

type AuthStoreState = {
  count: number
}

type AuthStoreActions = {
  inc(): void
}

type AuthStore = AuthStoreState & AuthStoreActions

const useAuthStore = create(devtools<AuthStore>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
})))

export { useAuthStore };

