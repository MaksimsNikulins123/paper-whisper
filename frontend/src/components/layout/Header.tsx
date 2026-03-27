'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from '@/src/components/ui/ThemeSwitcher';
import LanguageSwitcher from '@/src/components/ui/LanguageSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-[#f7f3ef] text-black dark:bg-black dark:text-white transition-colors duration-300 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="logo"
            loading="eager"
            style={{ width: '40px', height: 'auto' }}
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="font-semibold text-lg tracking-tight whitespace-nowrap hidden sm:block">
            Paper Whisper
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link
            href="/catalog"
            className="hover:text-neutral-500 transition whitespace-nowrap"
          >
            Catalog
          </Link>
          <Link
            href="/blog"
            className="hover:text-neutral-500 transition whitespace-nowrap"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-neutral-500 transition whitespace-nowrap"
          >
            About Us
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <div className="hidden md:flex items-center gap-3">
            <button className="min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium hover:border-[#8d6e63] transition-all">
              Login
            </button>
            <button className="min-w-[100px] px-5 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium hover:border-[#8d6e63] transition-all">
              Customize
            </button>
          </div>
          <LanguageSwitcher />
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      <div
        className={`
        md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#f7f3ef] dark:bg-black border-b border-neutral-200 dark:border-neutral-800
        ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
      `}
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-4 text-lg font-medium">
            <Link
              href="/catalog"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#8d6e63]"
            >
              Catalog
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#8d6e63]"
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#8d6e63]"
            >
              About Us
            </Link>
          </div>
          <hr className="border-neutral-200 dark:border-neutral-800" />
          <div className="flex flex-col gap-3 items-center">
            <button className="w-full max-w-[280px] py-3 border border-neutral-300 dark:border-neutral-700 rounded-full font-medium">
              Login
            </button>
            <button className="w-full max-w-[280px] py-3 bg-[#8d6e63] text-white rounded-full font-medium">
              Customize
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
