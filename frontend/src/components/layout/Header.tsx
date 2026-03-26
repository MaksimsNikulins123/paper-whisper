import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from '@/src/components/ui/ThemeSwitcher';
import LanguageSwitcher from '@/src/components/ui/LanguageSwitcher';

const Header = () => {
  return (
    <header className="w-full bg-[#f7f3ef] text-black dark:bg-black dark:text-white transition-colors duration-300 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="logo"
            loading="eager"
            style={{ width: '40px', height: 'auto' }}
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="font-semibold text-lg tracking-tight whitespace-nowrap">
            Paper Whisper
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/catalog" className="hover:text-neutral-500 transition">
            Catalog
          </Link>
          <Link href="/blog" className="hover:text-neutral-500 transition">
            Blog
          </Link>
          <Link href="/about" className="hover:text-neutral-500 transition">
            About Us
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <button className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased">
            Login
          </button>

          <button className="hidden sm:flex items-center justify-center min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased">
            Customize
          </button>

          <div className="min-w-[40px] flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
