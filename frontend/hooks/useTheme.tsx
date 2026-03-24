'use client';

import { useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

const KEY = 'theme';

// получить текущее значение
function getSnapshot(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem(KEY);
  return saved === 'dark' ? 'dark' : 'light';
}

// подписка
function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

// хук
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => 'light');

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(KEY, newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    window.dispatchEvent(new Event('storage'));
  };

  return { theme, setTheme };
}
