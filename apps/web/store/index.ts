import { create } from 'zustand';

interface AuthState {
  user: { name: string; avatar?: string } | null;
  setUser: (user: AuthState['user']) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));