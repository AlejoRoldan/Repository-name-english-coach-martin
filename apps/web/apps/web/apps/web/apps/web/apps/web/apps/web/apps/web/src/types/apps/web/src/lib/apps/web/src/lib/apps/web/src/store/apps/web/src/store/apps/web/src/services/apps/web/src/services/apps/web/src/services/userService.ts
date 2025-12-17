import api from './api';
import { User, UserProfile, Achievement, LearningStats } from '@/types';

export const userService = {
  async getProfile(): Promise<{ user: User; profile: UserProfile }> {
    const response = await api.get('/user/profile');
    return response.data;
  },

  async updateProfile(updates: Partial<UserProfile>): Promise<UserProfile> {
    const response = await api.patch('/user/profile', updates);
    return response.data;
  },

  async getStats(): Promise<LearningStats> {
    const response = await api.get('/user/stats');
    return response.data;
  },

  async getAchievements(): Promise<Achievement[]> {
    const response = await api.get('/user/achievements');
    return response.data;
  },
};

export default userService;
