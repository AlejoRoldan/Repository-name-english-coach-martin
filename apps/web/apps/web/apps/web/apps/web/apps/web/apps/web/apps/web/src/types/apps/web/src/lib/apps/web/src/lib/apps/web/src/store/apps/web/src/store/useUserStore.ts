import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, UserProfile, Achievement } from '@/types';

interface UserState {
  user: User | null;
  profile: UserProfile | null;
  achievements: Achievement[];
  isAuthenticated: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  setAchievements: (achievements: Achievement[]) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      profile: null,
      achievements: [],
      isAuthenticated: false,

      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user 
      }),
      
      setProfile: (profile) => set({ profile }),
      
      updateProfile: (updates) => set((state) => ({
        profile: state.profile ? { ...state.profile, ...updates } : null
      })),
      
      setAchievements: (achievements) => set({ achievements }),
      
      logout: () => set({
        user: null,
        profile: null,
        achievements: [],
        isAuthenticated: false,
      }),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);
