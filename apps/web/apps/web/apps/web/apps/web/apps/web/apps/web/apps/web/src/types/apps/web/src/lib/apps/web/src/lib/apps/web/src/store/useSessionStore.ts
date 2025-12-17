import { create } from 'zustand';
import { Session, Challenge, Message } from '@/types';

interface SessionState {
  currentSession: Session | null;
  messages: Message[];
  challenge: Challenge | null;
  sessionTime: number;
  isActive: boolean;
  isLoading: boolean;
  
  // Actions
  setCurrentSession: (session: Session | null) => void;
  addMessage: (message: Message) => void;
  setChallenge: (challenge: Challenge) => void;
  incrementTime: () => void;
  setIsActive: (isActive: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  updateChallenge: (wordsUsed: number) => void;
  resetSession: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentSession: null,
  messages: [],
  challenge: null,
  sessionTime: 0,
  isActive: false,
  isLoading: false,

  setCurrentSession: (session) => set({ currentSession: session }),
  
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),
  
  setChallenge: (challenge) => set({ challenge }),
  
  incrementTime: () => set((state) => ({
    sessionTime: state.sessionTime + 1
  })),
  
  setIsActive: (isActive) => set({ isActive }),
  
  setIsLoading: (isLoading) => set({ isLoading }),
  
  updateChallenge: (wordsUsed) => set((state) => ({
    challenge: state.challenge ? {
      ...state.challenge,
      wordsUsed: state.challenge.wordsUsed + wordsUsed
    } : null
  })),
  
  resetSession: () => set({
    currentSession: null,
    messages: [],
    challenge: null,
    sessionTime: 0,
    isActive: false,
    isLoading: false,
  }),
}));
