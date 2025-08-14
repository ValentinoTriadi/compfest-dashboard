import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const countPercentage = (tr: number, trlm: number) => {
  const diff = tr - trlm;
  const percentage = (diff / trlm) * 100;
  return isNaN(percentage) ? 0 : percentage.toFixed(1);
};
