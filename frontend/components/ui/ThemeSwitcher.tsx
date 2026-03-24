'use client';

import { useTheme } from '@/hooks/useTheme';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 border border-neutral-400 rounded text-sm 
                 hover:bg-black hover:text-white 
                 dark:hover:bg-white dark:hover:text-black transition"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
