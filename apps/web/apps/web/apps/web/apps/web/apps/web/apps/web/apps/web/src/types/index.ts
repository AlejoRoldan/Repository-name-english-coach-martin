export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  nativeLanguage: string;
  targetLanguage: string;
  interests: string[];
  createdAt: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  currentLevel: number;
  totalXp: number;
  totalCoins: number;
  streakDays: number;
  lastSessionDate: string;
  totalWordsLearned: number;
  totalSessions: number;
  totalTimeMinutes: number;
  preferences: UserPreferences;
}

export interface UserPreferences {
  sessionDuration: number;
  themes: string[];
  difficultyLevel: string;
}

export interface Session {
  id: string;
  userId: string;
  startedAt: string;
  endedAt?: string;
  durationSeconds: number;
  theme: string;
  plannedDurationMinutes: number;
  wordsUsed: number;
  wordsGoal: number;
  xpEarned: number;
  coinsEarned: number;
  status: 'active' | 'completed' | 'abandoned';
}

export interface Message {
  id: string;
  sessionId: string;
  userId: string;
  sender: 'user' | 'coach';
  content: string;
  metadata?: MessageMetadata;
  createdAt: string;
}

export interface MessageMetadata {
  quickTip?: string;
  detectedErrors?: DetectedError[];
  vocabularyUsed?: string[];
  difficultyLevel?: string;
  xpBonus?: number;
}

export interface DetectedError {
  type: 'grammar' | 'vocabulary' | 'spelling';
  incorrect: string;
  correct: string;
  explanation: string;
  severity: 'minor' | 'major';
}

export interface Challenge {
  theme: string;
  emoji: string;
  description: string;
  wordsGoal: number;
  wordsUsed: number;
}

export interface Achievement {
  id: string;
  code: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  xpReward: number;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface Vocabulary {
  id: string;
  userId: string;
  word: string;
  theme: string;
  firstSeenAt: string;
  timesUsed: number;
  masteryLevel: number;
  lastUsedAt: string;
}

export interface LearningStats {
  vocabularyGrowth: number[];
  grammarAccuracy: number[];
  conversationLength: number[];
  weeklyProgress: {
    day: string;
    minutes: number;
    xp: number;
  }[];
}
