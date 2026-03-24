import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  return (
    <header className="w-full bg-[#f7f3ef] text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* --- БЛОК 1: НАВИГАЦИЯ (Sticky) --- */}
      <nav className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="logo"
              loading="eager"
              className="group-hover:rotate-12 transition-transform"
            />
            <span className="font-semibold text-lg tracking-tight">
              Paper Whisper
            </span>
          </Link>

          {/* Ссылки (Desktop) */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/catalog" className="hover:text-neutral-500 transition">
              Каталог
            </Link>
            <Link href="/blog" className="hover:text-neutral-500 transition">
              Блог
            </Link>
            <Link href="/about" className="hover:text-neutral-500 transition">
              О нас
            </Link>
          </div>

          {/* Инструменты и Кнопки */}
          <div className="flex items-center gap-3">
            {/* Переключатель темы */}
            <ThemeSwitcher />

            {/* Кнопка Войти */}
            <button
              className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 
               border border-neutral-300 dark:border-neutral-700 rounded-full 
               text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300
               hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8]
               transition-all duration-300 active:scale-95 antialiased"
            >
              Войти
            </button>

            {/* Кнопка Создать */}
            <button
              className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 
               border border-neutral-300 dark:border-neutral-700 rounded-full 
               text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300
               hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8]
               transition-all duration-300 active:scale-95 antialiased"
            >
              Создать
            </button>

            {/* Переключатель языка с фиксированной шириной */}
            <div className="min-w-[40px] flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* --- БЛОК 2: БАННЕР (HERO SECTION) --- */}
      <section className="w-full bg-[#f7f3ef] dark:bg-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* --- КОЛОНКА 1: ТЕКСТ И КНОПКИ (СЛЕВА) --- */}
          <div className="flex flex-col items-start text-left order-2 md:order-1">
            {/* Надзаголовок (опционально, для стиля) */}
            <span className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
              Handmade in Europe
            </span>

            {/* H1 Заголовок (font-serif обязателен) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-black dark:text-white mb-6 max-w-lg">
              Открытки ручной работы —{' '}
              <span className="italic">для тех, кого важно удивить</span>
            </h1>

            {/* Подзаголовок */}
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-md mb-10 font-light leading-relaxed">
              Уникальный дизайн, тактильная бумага и частичка тепла в каждом
              послании. Доставка ваших чувств по всему миру.
            </p>

            {/* Группа кнопок (прижата влево) */}
            <div className="flex flex-wrap gap-4 justify-start w-full">
              <Link
                href="/catalog"
                className="px-8 py-3.5 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform shadow-sm"
              >
                Выбрать открытку
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 border border-neutral-300 dark:border-neutral-700 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                Узнать о нас
              </Link>
            </div>
          </div>

          {/* --- КОЛОНКА 2: ИЗОБРАЖЕНИЕ (СПРАВА) --- */}
          {/* Обертка с aspect-ratio гарантирует, что место под картинку зарезервировано до загрузки */}
          <div className="relative order-1 md:order-2 aspect-[4/3] md:aspect-auto w-full h-full min-h-[300px] md:min-h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero-card.jpg" // Укажите путь к изображению из Figma
              alt="Премиальная открытка ручной работы в упаковке"
              fill // Заполняет родительский контейнер
              priority // Загружается в первую очередь (важно для LCP)
              className="object-cover object-center" // Картинка не искажается
              sizes="(max-width: 768px) 100vw, 50vw" // Оптимизация размера для разных экранов
            />
          </div>
        </div>

        {/* Линия-разделитель внизу секции (как в Figma) */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </section>
    </header>
  );
}
