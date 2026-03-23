import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200 bg-[#f7f3ef]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="logo"
            loading="eager" 
            style={{ width: "auto", height: "auto" }}
          />
          <span className="font-semibold text-lg">Paper Whisper</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/catalog">Каталог</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/about">О нас</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="px-4 py-2 text-sm border border-black dark:border-white">
            Войти
          </button>
          <button className="px-4 py-2 text-sm bg-black text-white dark:bg-white dark:text-black">
            Создать
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
