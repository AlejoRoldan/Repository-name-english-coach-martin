export const THEMES = {
  football: {
    name: 'Football',
    emoji: '⚽',
    color: 'bg-green-500',
    topics: [
      'Who is your favorite football player?',
      'Tell me about your last football match',
      'What position do you like to play?',
      'Which team do you support?',
      'What was the best goal you ever saw?'
    ],
    vocabulary: ['goal', 'match', 'team', 'player', 'score', 'dribble', 'pass', 'shoot', 'defender', 'striker']
  },
  perfume: {
    name: 'Perfumes',
    emoji: '🌸',
    color: 'bg-pink-500',
    topics: [
      'What smells do you like the most?',
      'Tell me about your favorite perfume',
      'Do you know how perfumes are made?',
      'What scents remind you of something special?',
      'Would you create your own perfume? How?'
    ],
    vocabulary: ['smell', 'scent', 'fragrance', 'fresh', 'sweet', 'strong', 'bottle', 'spray', 'aroma', 'essence']
  },
  formula1: {
    name: 'Formula 1',
    emoji: '🏎️',
    color: 'bg-red-500',
    topics: [
      'Who is your favorite F1 driver?',
      'What do you think makes a car fast?',
      'Tell me about the most exciting race you watched',
      'Which F1 team do you like and why?',
      'Would you like to be an F1 driver?'
    ],
    vocabulary: ['race', 'speed', 'driver', 'track', 'lap', 'pit stop', 'engine', 'wheel', 'podium', 'champion']
  }
} as const;

export const SESSION_DURATIONS = [10, 20, 30, 45, 60] as const;

export const ACHIEVEMENTS = [
  { id: '1', code: 'first_goal', name: 'First Goal!', icon: '⚽', desc: 'Complete your first session' },
  { id: '2', code: 'speed_demon', name: 'Speed Demon', icon: '🏎️', desc: 'Use 50 F1 words' },
  { id: '3', code: 'word_collector', name: 'Word Collector', icon: '📚', desc: 'Learn 100 words' },
  { id: '4', code: 'perfume_master', name: 'Perfume Master', icon: '🌸', desc: 'Talk about scents 5 times' },
  { id: '5', code: 'hat_trick', name: 'Hat Trick!', icon: '🎯', desc: 'Complete 3 sessions in a row' },
  { id: '6', code: 'champion', name: 'Champion', icon: '🏆', desc: 'Reach level 10' },
] as const;

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    me: '/auth/me',
  },
  sessions: {
    start: '/sessions/start',
    end: (id: string) => `/sessions/${id}/end`,
    chat: (id: string) => `/sessions/${id}/chat`,
  },
  user: {
    profile: '/user/profile',
    stats: '/user/stats',
    achievements: '/user/achievements',
  },
} as const;
