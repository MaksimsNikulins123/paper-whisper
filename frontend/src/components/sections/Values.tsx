"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/components/ui/providers';

const values = [
  {
    id: 1,
    title: {
      ru: 'Ручная работа',
      en: 'Handmade',
    },
    desc: {
      ru: 'Это не просто эстетика. Это время, вложенное в детали.',
      en: 'It’s more than just aesthetics. It’s the time poured into every detail.',
    },
    alt: {
      ru: 'Ручная работа',
      en: 'Handmade',
    },
    icon: '/value_section/icon-1.svg',
  },
  {
    id: 2,
    title: {
      ru: 'Наши — нет',
      en: "Ours aren’t.",
    },
    desc: {
      ru: 'Каждая открытка уникальна: не существует двух одинаковых.',
      en: 'Each card is unique. No two are alike.',
    },
    alt: {
      ru: 'Наши — нет',
      en: "Ours aren’t.",
    },
    icon: '/value_section/icon-2.svg',
  },
  {
    id: 3,
    title: {
      ru: 'Уникальность в каждом штрихе',
      en: "Uniqueness in every stroke",
    },
    desc: {
      ru: 'Нет двух одинаковых открыток. Каждая несёт отпечаток рук того, кто её делал.',
      en: 'No two cards are alike. Each carries the unique touch of its creator.',
    },
    alt: {
      ru: 'Уникальность в каждом штрихе',
      en: "Uniqueness in every stroke",
    },
    icon: '/value_section/icon-3.svg',
  }
];


export const Values = () => {

  const { t, lang } = useTranslation();

  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-12">
          <div className="space-y-10">
            {values.map((item, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                  <Image
                    src={item.icon}
                    alt={item.title[lang]}
                    fill
                    className="object-contain transition-all duration-500 group-hover:opacity-40 group-hover:scale-95"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 tracking-tight">
                    {item.title[lang]}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-sm">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 pt-4">
            <Link
              href="/catalog"
              className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
            >
              {t('values.primary_cta')}
            </Link>
            <Link
              href="/constructor"
              className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
            >
              {t('values.secondary_cta')}
            </Link>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/value_section/image-1.jpg"
            alt="Детали открытки ручной работы"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-white/5 dark:bg-black/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
