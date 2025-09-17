import { create } from "zustand";

export const useAuth = create((set) => ({
  user: null, // { role: "student" | "counsellor", name: "..." }
  login: (role, name) => set({ user: { role, name } }),
  logout: () => set({ user: null }),
}));
