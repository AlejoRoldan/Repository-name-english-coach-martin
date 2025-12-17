import api from './api';
import { Session, Challenge } from '@/types';

export const sessionService = {
  async startSession(data: {
    theme: string;
    durationMinutes: number;
  }): Promise<{ session: Session; challenge: Challenge; welcomeMessage: string }> {
    const response = await api.post('/sessions/start', data);
    return response.data;
  },

  async endSession(sessionId: string): Promise<{
    rewards: {
      xp: number;
      coins: number;
      wordsLearned: number;
    };
    newAchievements: any[];
    summary: string;
  }> {
    const response = await api.post(`/sessions/${sessionId}/end`);
    return response.data;
  },

  async getSessions(userId: string): Promise<Session[]> {
    const response = await api.get(`/sessions?userId=${userId}`);
    return response.data;
  },

  async getSessionById(sessionId: string): Promise<Session> {
    const response = await api.get(`/sessions/${sessionId}`);
    return response.data;
  },
};

export default sessionService;
