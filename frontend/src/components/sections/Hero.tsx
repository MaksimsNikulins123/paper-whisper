"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from "@/components/ui/providers";

export const Hero = () => {

  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-black dark:text-white mb-6 max-w-lg">
            {t("hero.title.part1")}<br></br>
            <span className="italic">{t("hero.title.part2")}</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-md mb-10 font-light leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4 justify-start w-full">
            <Link
              href="/constructor"
              className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
            >
              {t("hero.primary_cta")}
            </Link>
            <Link
              href="/catalog"
              className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
            >
              {t("hero.secondary_cta")}
            </Link>
          </div>
        </div>
        <div className="relative order-1 md:order-2 aspect-[4/3] md:aspect-auto w-full h-full min-h-[300px] md:min-h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/first_section_images/image_one.jpg"
            alt="Премиальная открытка ручной работы"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </section>
  );
};
