'use client';

import { useTheme } from '@/src/hooks/useTheme';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="hidden sm:block px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium
             tracking-wide text-neutral-600 dark:text-neutral-300
             hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8]
             transition-all duration-300 active:scale-95"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
