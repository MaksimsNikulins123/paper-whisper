import Image from 'next/image';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black py-20 md:py-32 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* --- ЗАГОЛОВОК И ТЕКСТ --- */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-black dark:text-white antialiased mb-6">
            Соберите открытку прямо сейчас
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Не нужно долго думать. Выберите дизайн, добавьте свои слова и фото.
            Мастер сделает остальное.
          </p>
        </div>

        {/* --- КНОПКИ --- */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <Link
            href="/constructor"
            className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
          >
            Customize
          </Link>
          <Link
            href="/catalog"
            className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
          >
            Explore Catalog
          </Link>
        </div>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-2xl group">
          <Image
            src="/cta_section/image-1.jpg" // Атмосферное фото: сухая роза на бумаге ручного литья
            alt="The process of creating a postcard"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          {/* Мягкий градиент поверх фото */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
