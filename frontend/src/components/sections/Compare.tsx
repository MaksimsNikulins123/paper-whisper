import React from 'react';
import Link from 'next/link';
import { Check, X, ChevronRight } from 'lucide-react';

const comparisonData = [
  { feature: 'Персонализация', ready: 'Нет', custom: 'Да' },
  { feature: 'Время изготовления', ready: true, custom: true },
  { feature: 'Загрузка фото', ready: false, custom: true },
  { feature: 'Выбор дизайна', ready: true, custom: true },
  { feature: 'Доставка', ready: true, custom: true },
];

// Helper for painting Yes/No/Icons
const renderValue = (val: string | boolean) => {
  if (typeof val === 'string') return val;
  return val ? (
    <Check className="w-5 h-5 mx-auto text-black dark:text-white" />
  ) : (
    <X className="w-5 h-5 mx-auto text-neutral-400 dark:text-neutral-600" />
  );
};

export const Compare = () => {
  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black py-20 md:py-32 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* --- ЗАГОЛОВОК --- */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-black dark:text-white mb-6">
            Мы здесь, чтобы помочь
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-light">
            Напишите нам в любое время. Ответим быстро.
          </p>
        </div>

        {/* --- ТАБЛИЦА СРАВНЕНИЯ --- */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black dark:border-white">
                <th className="py-6 text-sm font-bold uppercase tracking-wider text-black dark:text-white w-1/3">
                  Сравнение услуг
                </th>
                <th className="py-6 text-center text-xl md:text-2xl font-serif font-medium text-black dark:text-white w-1/3">
                  Готовые
                </th>
                <th className="py-6 text-center text-xl md:text-2xl font-serif font-medium text-black dark:text-white w-1/3">
                  Индивидуальные
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-neutral-300 dark:border-neutral-800"
                >
                  <td className="py-6 font-medium text-neutral-800 dark:text-neutral-200">
                    {row.feature}
                  </td>
                  <td className="py-6 text-center text-neutral-600 dark:text-neutral-400">
                    {renderValue(row.ready)}
                  </td>
                  <td className="py-6 text-center text-neutral-600 dark:text-neutral-400">
                    {renderValue(row.custom)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- КНОПКИ (ОПТИМИЗИРОВАННЫЕ) --- */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/catalog"
            className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
          >
            Explore Catalog
          </Link>
          <Link
            href="/constructor"
            className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
          >
            Customize
          </Link>
        </div>
      </div>
    </section>
  );
};
