'use client';

import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Сколько времени на открытку?',
    answer:
      'Стандартная открытка готова за двадцать минут. Персонализированная требует сорок минут, потому что каждая уникальна и делается вручную. Если заказов много, открытка встанет в очередь, но качество не пострадает.',
  },
  {
    question: 'Как отправить получателю?',
    answer:
      'Открытка идёт прямо адресату. Выбираете почту или курьера при оформлении. Можно отследить доставку и застраховать посылку. Если потеряется, мы переделаем открытку бесплатно.',
  },
  {
    question: 'Что если открытка не понравится?',
    answer:
      'Переделаем бесплатно. Если вы недовольны, мастер создаст новую. Это работает всегда, кроме случаев мошенничества или когда нет доказательств проблемы.',
  },
  {
    question: 'Какие фото можно загружать?',
    answer:
      'JPG или PNG до тридцати мегабайт. Нужно подтвердить, что это ваше фото или у вас есть право его использовать. Система проверит размер и формат автоматически.',
  },
  {
    question: 'Сколько вариантов дизайна?',
    answer:
      'Система генерирует три варианта. Если ни один не подходит, можно сгенерировать ещё три. Они добавятся к списку, и вы выберете лучший.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Первый открыт по умолчанию

  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black py-20 md:py-32 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-black dark:text-white mb-6">
            Вопросы
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-light">
            Ответы на то, что волнует больше всего.
          </p>
        </div>
        <div className="border-t border-neutral-300 dark:border-neutral-800">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-300 dark:border-neutral-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-medium text-black dark:text-white transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                  {faq.question}
                </span>
                <ChevronUp
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-0' : 'rotate-180'
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'
                }`}
              >
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 md:mt-32 text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-black dark:text-white mb-8">
            Остались вопросы?
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 font-light mb-10">
            Напишите нам, и мы ответим.
          </p>
          <button className="flex items-center justify-center mx-auto min-w-[160px] px-10 py-3 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased">
            Написать
          </button>
        </div>
      </div>
    </section>
  );
};
