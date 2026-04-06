import en from "./en.json";
import ru from "./ru.json";
import { Paths } from "./types";

export const messages = {
  en,
  ru,
};

export type Lang = keyof typeof messages;
export type Messages = typeof messages;

export type TranslationKey = Paths<typeof ru>;