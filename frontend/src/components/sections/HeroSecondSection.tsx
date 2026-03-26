import Image from 'next/image';
import Link from 'next/link';

// Данные для карточек (можно вынести в отдельный файл config)
const categories = [
  {
    id: 1,
    title: 'Свадебные',
    subtitle: 'Для самого важного дня',
    image: '/cat-wedding.jpg', // Замените на ваши пути к картинкам из Figma
    href: '/catalog/wedding',
  },
  {
    id: 2,
    title: 'Дни рождения',
    subtitle: 'Теплые слова близким',
    image: '/cat-birthday.jpg',
    href: '/catalog/birthday',
  },
  {
    id: 3,
    title: 'Индивидуальные',
    subtitle: 'Ваш дизайн и текст',
    image: '/cat-custom.jpg',
    href: '/catalog/custom',
  },
];

const HeroSecondSection = () => {
  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center">
        {/* --- ЧАСТЬ 1: БОЛЬШОЙ ЦЕНТРИРОВАННЫЙ ТЕКСТ --- */}
        <div className="text-center max-w-4xl mb-20 md:mb-28">
          {/* font-serif и font-medium обязательны для соответствия Figma */}
          <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-black dark:text-white antialiased">
            Настоящие, искренние и живые — эти открытки станут частью вашей
            истории.
            <span className="italic text-neutral-500 dark:text-neutral-400">
              {' '}
              Каждая деталь
            </span>{' '}
            — от сургучной печати до аромата сухоцветов — создана, чтобы
            передать тепло ваших чувств.
          </h2>
        </div>

        {/* --- ЧАСТЬ 2: СЕТКА КАТЕГОРИЙ (3 колонки) --- */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Изображение категории */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                priority={category.id === 1} // Приоритет для первой картинки
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Градиентный оверлей для читаемости текста (как в Figma) */}
              {/* <div className="absolute id="ov"nset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300" /> */}
              {/* Текстовый блок (прижат к низу) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {/* Заголовок категории (serif) */}
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-white mb-2 leading-tight">
                  {category.title}
                </h3>

                {/* Подзаголовок (sans, более тонкий) */}
                <p className="text-sm md:text-base text-neutral-200 font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {category.subtitle}
                </p>

                {/* Декоративная линия (появляется при наведении) */}
                <div className="mt-4 w-0 group-hover:w-full h-[1px] bg-white/50 transition-all duration-500 delay-200" />
              </div>
              {/* Легкое свечение при наведении (премиум-эффект) */}
              <div className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-lg rounded-2xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSecondSection;
