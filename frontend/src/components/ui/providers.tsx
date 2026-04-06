"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext } from "react";
import { useSyncExternalStore } from "react";
import { messages, Lang, TranslationKey } from "@/lib/i18n";

const STORAGE_KEY = "lang";

// --- Language store ---
function getSnapshot(): Lang {
  if (typeof window === "undefined") return "ru";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "ru";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function useLanguageStore(): [Lang, (lang: Lang) => void] {
  const lang = useSyncExternalStore<Lang>(subscribe, getSnapshot, () => "ru");

  const setLang = (newLang: Lang) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    window.dispatchEvent(new Event("storage"));
  };

  return [lang, setLang];
}

// --- Language context ---
const LanguageContext = createContext<{
  lang: Lang;
  t: (key: TranslationKey) => string;
  setLang: (lang: Lang) => void;
} | null>(null);

// --- PROVIDER ---
export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useLanguageStore();

  const t = (key: TranslationKey): string => {
  const keys = key.split(".");
  let value: unknown = messages[lang];

  for (const k of keys) {
    if (typeof value === "object" && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof value === "string" ? value : key;
};

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={{ lang, t, setLang }}>
        {children}
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

// --- hook ---
export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used inside Providers");
  return ctx;
}