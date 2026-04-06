"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/components/ui/providers';

const promoCards = [
  {
    id: 1,
    title: {
      ru: 'Быстрое изготовление',
      en: 'Fast production',
    },
    desc: {
      ru: 'Мастера создают каждую открытку вручную за 20-60 минут.',
      en: 'Each card is handmade in 20–60 minutes.',
    },
    alt: {
      ru: 'Быстрое изготовление',
      en: 'Rapid Crafting',
    },
    img: '/promo_section/image-1.jpg',
    href: '/catalog',
    link: {
      ru: 'Узнать',
      en: 'Learn More'
    }
  },
  {
    id: 2,
    title: {
      ru: 'Доставка адресату',
      en: 'Direct delivery',
    },
    desc: {
      ru: 'Укажите адрес получателя — мы отправим напрямую от вашего имени.',
      en: 'Provide recipient address — we send it for you.',
    },
    alt: {
      ru: 'Доставка адресату',
      en: 'Direct-to-Recipient Delivery',
    },
    img: '/promo_section/image-2.jpg',
    href: '/catalog',
     link: {
      ru: 'Узнать',
      en: 'Learn More'
    }
  },
  {
    id: 3,
    title: {
      ru: 'Уникальность в каждом штрихе',
      en: 'Unique design',
    },
    desc: {
      ru: 'Нет двух одинаковых открыток. Каждая несёт отпечаток рук того, кто её делал.',
      en: 'No two cards are the same.',
    },
    alt: {
      ru: 'Уникальность',
      en: 'Uniqueness in Every Stroke',
    },
    img: '/promo_section/image-3.jpg',
    href: '/catalog',
     link: {
      ru: 'Узнать',
      en: 'Learn More'
    }
  },
];

export const PromoCards = () => {

  console.log(promoCards)

  const { t, lang } = useTranslation();

  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center">
        <div className="text-center max-w-4xl mb-20 md:mb-28">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-black dark:text-white mb-6 max-w-lg">
          {t("promoCards.title.part1")}
          <span className="italic text-neutral-400">
            {' '}
            {t("promoCards.title.part2")}
          </span>
          <span className="text-neutral-600">
            {' '}
            {t("promoCards.title.part3")}
          </span>
        </h2>
        <p className="text-sm md:text-base text-neutral-600 font-light tracking-wide max-w-xl mx-auto">
          {t("promoCards.cta")}
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {promoCards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[#8d6e63]/20"
          >
            <Image
              src={card.img}
              alt={card.title[lang]}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <h3 className="text-2xl font-serif font-medium text-white mb-3 max-w-[80%]leading-tight">
                {card.title[lang]}
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 overflow-hidden">
                {card.desc[lang]}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <span>{card.link[lang]}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500" />
          </Link>
        ))}
      </div>
    </div>
  </section>
) 
};
