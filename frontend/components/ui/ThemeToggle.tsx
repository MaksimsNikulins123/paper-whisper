'use client';

import { useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setDark(false);
    } else {
      html.classList.add('dark');
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 border text-sm border-neutral-300 dark:border-neutral-600"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
