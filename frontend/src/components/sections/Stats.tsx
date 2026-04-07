'use client';

import Image from 'next/image';
import { useTranslation } from '../ui/providers';

const stats = [
  {
    id: 1,
    title: {
      ru: '30',
      en: '30',
    },
    subtitle: {
      ru: 'Минут',
      en: 'Minutes',
    },
    desc: {
      ru: 'среднее время изготовления открытки',
      en: 'average production time.',
    },
  },
  {
    id: 2,
    title: {
      ru: '3',
      en: '3',
    },
    subtitle: {
      ru: 'Варианта дизайна',
      en: 'Design Options',
    },
    desc: {
      ru: 'предлагаем на выбор для каждого заказа',
      en: 'curated for every order.',
    },
  },
  {
    id: 3,
    title: {
      ru: 'До 30МВ',
      en: 'Up to 30MB',
    },
    subtitle: {
      ru: 'Максимальный',
      en: 'Maximum',
    },
    desc: {
      ru: 'размер загружаемого фото',
      en: 'file size for photos.',
    },
  },
];

export const Stats = () => {
  const { t, lang } = useTranslation();

  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black py-20 md:py-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-black dark:text-white antialiased">
            {t('stats.title')}
          </h2>
          <div className="w-12 h-[1px] bg-[#8d6e63] my-6" />{' '}
          <p className="text-neutral-600 dark:text-neutral-400 font-light max-w-xl leading-relaxed">
            {t('stats.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col gap-6 h-full">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex-1 p-8 border border-neutral-300 dark:border-neutral-800 rounded-sm bg-white/50 dark:bg-neutral-900/50 hover:border-[#8d6e63] dark:hover:border-[#d7ccc8] transition-all duration-500 group flex flex-col justify-center"
              >
                <span className="text-5xl md:text-6xl font-serif font-bold text-black dark:text-white leading-none antialiased group-hover:text-[#8d6e63] transition-colors duration-500">
                  {item.title[lang]}
                </span>
                <span className="mt-4 text-sm font-semibold text-black dark:text-white uppercase tracking-[0.2em]">
                  {item.subtitle[lang]}
                </span>
                <p className="mt-2 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-[240px]">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>
          <div className="relative min-h-[450px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl group border border-white/50 dark:border-neutral-800/50">
            <Image
              src="/stats_section/image-1.jpg"
              alt="Примеры готовых открыток"
              fill
              loading="eager"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
