import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200 bg-[#f7f3ef] text-black dark:bg-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="logo"
            loading="eager"
            style={{ width: 'auto', height: 'auto' }}
          />
          <span className="font-semibold text-lg">Paper Whisper</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/catalog">Каталог</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/about">О нас</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <button
            className="px-3 py-1 border border-neutral-400 rounded text-sm 
                 hover:bg-black hover:text-white 
                 dark:hover:bg-white dark:hover:text-black transition"
          >
            Войти
          </button>
          <button
            className="px-3 py-1 border border-neutral-400 rounded text-sm bg-black text-white
                 hover:bg-[#f7f3ef] hover:text-black 
                 dark:hover:bg-white dark:hover:text-black transition"
          >
            Создать
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
