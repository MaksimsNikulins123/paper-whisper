'use client'

import { useSyncExternalStore } from 'react';

type Lang = 'en' | 'ru';

const STORAGE_KEY = 'lang';

// --- Get Lang value ---
function getSnapshot(): Lang {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'ru') return 'ru';
  return 'en';
}

// --- Subscribe on changes in localStorage ---
function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

// --- HOOK ---
function useLanguage(): [Lang, (lang: Lang) => void] {
  const lang = useSyncExternalStore<Lang>(subscribe, getSnapshot, () => 'en');
  const setLang = (newLang: Lang) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    window.dispatchEvent(new Event('storage'));
  };

  return [lang, setLang];
}

// --- Language switcher component ---
export default function LanguageSwitcher() {
  const [lang, setLang] = useLanguage();

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ru' : 'en');
  };

  return (
    <button
      onClick={toggleLang}
      className="hidden sm:flex items-center justify-center min-w-[50px] px-5 py-2 
               border border-neutral-300 dark:border-neutral-700 rounded-full 
               text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300
               hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8]
               transition-all duration-300 active:scale-95 antialiased"
    >
      {lang.toUpperCase()}
    </button>
  );
}