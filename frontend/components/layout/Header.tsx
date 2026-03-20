import Link from 'next/link';
import Image from 'next/image';
// import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-200 bg-[#f7f3ef]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Paper Whisper"
            width={32}
            height={32}
            style={{ width: 'auto', height: 'auto' }}
          />
          <span className="font-semibold text-lg">Paper Whisper</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/catalog">Каталог</Link>
          <Link href="/blog">Блог</Link>
          <div className="bg-red-500 text-white p-4">Tailwind v4 OK</div>
          <Link href="/about">О нас</Link>
        </nav>
        <div className="flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <button className="px-4 py-2 text-sm border border-black dark:border-white">
            Войти
          </button>
          <button className="px-4 py-2 text-sm bg-black text-white dark:bg-white dark:text-black">
            Создать
          </button>
        </div>
      </div>
    </header>
  );
}
