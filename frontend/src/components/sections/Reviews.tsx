import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Иван Петров',
    role: 'Дизайнер, Москва',
    text: '"Открытка пришла такой живой, что я не поверил, что её делал не мой друг. Это настоящее искусство."',
    avatar: '/avatars/ivan.jpg',
  },
  {
    name: 'Сергей Волков',
    role: 'Предприниматель, Санкт-Петербург',
    text: '"Заказал для жены на годовщину. Мастер добавил детали, которых я не просил. Это было красиво и неожиданно."',
    avatar: '/avatars/sergey.jpg',
  },
  {
    name: 'Мария Сидорова',
    role: 'Учитель, Казань',
    text: '"Впервые вижу открытку, которая выглядит как подарок, а не как печать. Спасибо за это."',
    avatar: '/avatars/maria.jpg',
  },
];

export const Reviews = () => {
  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black text-black dark:text-white py-20 md:py-32 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight antialiased">
            Отзывы клиентов
          </h2>
          <p className="mt-6 text-neutral-600 dark:text-neutral-400 font-light max-w-xl leading-relaxed">
            Люди пишут нам, что чувствуют.
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
                  {review.text}
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
                    {review.name}
                  </span>
                  <span className="text-xs text-neutral-500 font-light mt-0.5">
                    {review.role}
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
