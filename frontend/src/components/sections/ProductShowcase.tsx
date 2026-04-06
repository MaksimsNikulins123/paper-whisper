"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../ui/providers';

const products = [
  {
    id: 1,
    title: {
      ru: 'Готовые открытки',
      en: 'Ready-to-Ship Cards',
    },
    desc: {
      ru: 'Выберите дизайн из каталога.',
      en: 'Browse our collection.',
    },
    img: '/product_showcase/image-1.jpg',
    alt: {
      ru: 'Готовые открытки',
      en: 'Ready-to-Ship Cards',
    },
    href: '/catalog',
    btnText: {
      ru: 'Смотреть каталог',
      en: 'Explore Catalog',
    }
  },
  {
    id: 2,
    title: {
      ru: 'Индивидуальные открытки',
      en: 'Custom Cards',
    },
    desc: {
      ru: 'Настройте всё: текст, фото, имя, дату.',
      en: 'Personalize it all: text, photos, names, and dates.',
    },
    img: '/product_showcase/image-2.jpg',
    alt: {
      ru: 'Индивидуальные открытки',
      en: 'Custom Cards',
    },
    href: '/constructor',
    btnText: {
      ru: 'Создать',
      en: 'Customize',
    }
  },
  {
    id: 3,
    title: {
      ru: 'День рождения, свадьба, спортивные победы',
      en: 'Birthdays, weddings, and sports milestones',
    },
    desc: {
      ru: 'В каждой категории по десять вариантов дизайна. Достаточно, чтобы найти своё.',
      en: 'Ten unique designs per category. Plenty of options to find \"the one.\"',
    },
    img: '/product_showcase/image-3.jpg',
    alt: {
      ru: 'День рождения, свадьба, спортивные победы',
      en: 'Birthdays, weddings, and sports milestones',
    },
    href: '/catalog',
    btnText: {
      ru: 'Смотреть каталог',
      en: 'Explore Catalog',
    }
  }
];

export const ProductShowcase = () => {

  const { lang } = useTranslation();

  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {products.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 py-20 items-center ${
              index !== products.length - 1
                ? 'border-b border-neutral-300 dark:border-neutral-800'
                : ''
            }`}
          >
            <div className="flex flex-col items-start space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-black dark:text-white max-w-sm">
                {item.title[lang]}
              </h2>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-light max-w-xs leading-relaxed">
                {item.desc[lang]}
              </p>
              <div className="flex items-center gap-6 pt-4">
                <Link
                  href={item.href}
                  className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
                >
                  {item.btnText[lang]}
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-sm group">
              <Image
                src={item.img}
                alt={item.title[lang]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
