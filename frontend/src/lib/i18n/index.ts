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

export type PromoCard = {
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  alt: Record<Lang, string>;
  img: string;
  href: string;
  link: string;
};