"use client";

import { useSyncExternalStore } from "react";

type Lang = "ru" | "en";

const STORAGE_KEY = "lang";

// --- Функция получения безопасного значения ---
function getSnapshot(): Lang {
  if (typeof window === "undefined") return "ru";

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "ru" || stored === "en") return stored;
  return "ru";
}

// --- Подписка на изменения ---
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

// --- Хук с правильной типизацией ---
function useLanguage(): [Lang, (lang: Lang) => void] {
  const lang = useSyncExternalStore<Lang>(subscribe, getSnapshot, () => "ru");

  const setLang = (newLang: Lang) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    window.dispatchEvent(new Event("storage"));
  };

  return [lang, setLang];
}

// --- Компонент переключателя ---
export default function LanguageSwitcher() {
  const [lang, setLang] = useLanguage();

  const toggleLang = () => {
    setLang(lang === "ru" ? "en" : "ru");
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 border border-neutral-400 rounded text-sm hover:bg-black hover:text-white transition"
    >
      {lang.toUpperCase()}
    </button>
  );
}