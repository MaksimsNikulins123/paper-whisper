import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const values = [
  {
    icon: '/value_section/icon-1.svg',
    title: 'Ручная работа',
    desc: 'это не просто эстетика. Это время, вложенное в детали.',
  },
  {
    icon: '/value_section/icon-2.svg',
    title: 'Наши — нет',
    desc: 'Каждая открытка уникальна: не существует двух одинаковых.',
  },
  {
    icon: '/value_section/icon-3.svg',
    title: 'Винтажный декор, живые текстуры',
    desc: 'Эмоция передаётся через вещь, сделанную руками.',
  },
];

export const Values = () => {
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
                    alt={item.title}
                    fill
                    className="object-contain transition-all duration-500 group-hover:opacity-40 group-hover:scale-95"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-sm">
                    {item.desc}
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
