import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(d);
}

export function calculateXpProgress(xp: number): { level: number; progress: number } {
  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;
  return { level, progress };
}

export function getProficiencyColor(level: number): string {
  if (level <= 3) return 'text-green-600 bg-green-100';
  if (level <= 6) return 'text-yellow-600 bg-yellow-100';
  if (level <= 9) return 'text-orange-600 bg-orange-100';
  return 'text-red-600 bg-red-100';
}
