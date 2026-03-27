export const Newsletter = () => {
  return (
    <section className="w-full bg-[#f7f3ef] dark:bg-black py-20 md:py-32 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-neutral-300 dark:border-neutral-800 p-12 md:p-24 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-black dark:text-white antialiased mb-6">
            Уникальный дизайн и истории
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-light max-w-xl leading-relaxed mb-12">
            Подпишитесь на рассылку. Мы пишем о новых дизайнах, акциях и том,
            как люди дарят открытки.
          </p>
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-3 items-stretch">
            <input
              type="email"
              placeholder="Введите ваш email"
              className="flex-1 px-6 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-full text-sm text-black dark:text-white outline-none focus:border-[#8d6e63] dark:focus:border-[#d7ccc8] transition-all placeholder:text-neutral-400"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black dark:bg-white border border-black dark:border-white rounded-full text-sm font-medium tracking-wide text-white dark:text-black hover:bg-[#8d6e63] dark:hover:bg-[#d7ccc8] hover:border-[#8d6e63] dark:hover:border-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
            >
              Подписаться
            </button>
          </form>
          <p className="mt-8 text-[10px] md:text-xs text-neutral-400 dark:text-neutral-600 font-light max-w-xs uppercase tracking-tighter">
            Нажимая кнопку, вы соглашаетесь с условиями использования и
            политикой конфиденциальности.
          </p>
        </div>
      </div>
    </section>
  );
};
