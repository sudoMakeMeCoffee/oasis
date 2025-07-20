import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: {},
  authLoading: true, // <-- add this
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (user) => set({ user }),
  setAuthLoading: (loading) => set({ authLoading: loading }), // <-- and this
}));

export default useAuthStore;
