'use client';

import { Star } from 'lucide-react';
import { useTranslation } from '../ui/providers';

const reviews = [
  {
    id: 1,
    name: {
      ru: 'Янис',
      en: 'Janis',
    },
    surname: {
      ru: 'Берзиньш',
      en: 'Berzins',
    },
    avatar: '/avatars/1.jpg',
    role: {
      ru: 'Дизайнер, Рига',
      en: 'Designer, Riga',
    },
    text: {
      ru: '"Открытка пришла такой живой, что я не поверил, что её делал не мой друг. Это настоящее искусство."',
      en: '"This card has so much soul. It feels like something a best friend would make just for you. A true work of art."',
    },
    createdAt: '2026-04-01T10:00:00Z',
  },
  {
    id: 2,
    name: {
      ru: 'Андрей',
      en: 'Andrei',
    },
    surname: {
      ru: 'Павлов',
      en: 'Pavlov',
    },
    avatar: '/avatars/2.jpg',
    role: {
      ru: 'Предприниматель, Резекне',
      en: 'Entrepreneur, Rezekne',
    },
    text: {
      ru: '"Заказал для жены на годовщину. Мастер добавил детали, которых я не просил. Это было красиво и неожиданно."',
      en: '"An anniversary gift for my wife. The creator added extra details that I didn\'t expect—it was stunning and truly unexpected."',
    },
    createdAt: '2026-04-02T12:30:00Z',
  },
  {
    id: 3,
    name: {
      ru: 'Линда',
      en: 'Linda',
    },
    surname: {
      ru: 'Витола',
      en: 'Vitolа',
    },
    avatar: '/avatars/3.jpg',
    role: {
      ru: 'Учитель, Лиепая',
      en: 'Teacher, Liepaja',
    },
    text: {
      ru: '"Впервые вижу открытку, которая выглядит как подарок, а не как печать. Спасибо за это."',
      en: '"Finally, a card that feels like a real gift, not just a print. Thank you for such quality."',
    },
    createdAt: '2026-03-10T09:15:00Z',
  },
];

export const Reviews = () => {
  const { t, lang } = useTranslation();

  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black text-black dark:text-white py-20 md:py-32 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight antialiased">
            {t('reviews.title')}
          </h2>
          <p className="mt-6 text-neutral-600 dark:text-neutral-400 font-light max-w-xl leading-relaxed">
            {t('reviews.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-10 border border-neutral-300 dark:border-neutral-800 rounded-sm bg-white/50 dark:bg-neutral-900/30 flex flex-col justify-between hover:border-[#8d6e63] dark:hover:border-neutral-600 transition-all duration-500 group shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-black dark:fill-white stroke-none group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 font-light leading-relaxed mb-12">
                  {review.text[lang]}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-neutral-400 dark:text-neutral-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold tracking-wide text-black dark:text-white">
                    {review.name[lang] + ' ' + review.surname[lang]}
                  </span>
                  <span className="text-xs text-neutral-500 font-light mt-0.5">
                    {review.role[lang]}
                  </span>
                  <span className="text-xs text-neutral-500 font-light mt-0.5">
                    {review.createdAt
                      ? new Date(review.createdAt).toLocaleDateString(
                          lang === 'ru' ? 'ru-RU' : 'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          },
                        )
                      : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
