'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client'; // Путь к твоему клиенту

import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiLinkerd,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import { useTranslation } from '../ui/providers';

const footerLinks = {
  products: [
    {
      id: 1,
      name: {
        ru: 'Каталог',
        en: 'Catalog',
      },
      href: '/catalog',
    },
    {
      id: 2,
      name: {
        ru: 'Конструктор',
        en: 'Constructor',
      },
      href: '/constructor',
    },
    {
      id: 3,
      name: {
        ru: 'О нас',
        en: 'About Us',
      },
      href: '/about',
    },
    {
      id: 4,
      name: {
        ru: 'Контакты',
        en: 'Contacts',
      },
      href: '/contacts',
    },
    {
      id: 5,
      name: {
        ru: 'Помощь',
        en: 'Help',
      },
      href: '/help',
    },
  ],
  info: [
    {
      id: 1,
      name: {
        ru: 'Блог',
        en: 'Blog',
      },
      href: '/blog',
    },
    {
      id: 2,
      name: {
        ru: 'FAQ',
        en: 'FAQ',
      },
      href: '/faq',
    },
    {
      id: 3,
      name: {
        ru: 'Доставка',
        en: 'Shipping',
      },
      href: '/shipping',
    },
    {
      id: 4,
      name: {
        ru: 'Возвраты',
        en: 'Returns',
      },
      href: '/returns',
    },
    {
      id: 5,
      name: {
        ru: 'Гарантия',
        en: 'Warranty',
      },
      href: '/warranty',
    },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: SiFacebook },
    { name: 'Instagram', href: '#', icon: SiInstagram },
    { name: 'X', href: '#', icon: SiX },
    { name: 'LinkedIn', href: '#', icon: SiLinkerd },
    { name: 'YouTube', href: '#', icon: SiYoutube },
  ],
};

export const Footer = () => {
  const { t, lang } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const supabase = createClient();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase.from('subscriptions').insert([{ email }]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#f7f3ef] dark:bg-black pt-20 pb-10 transition-colors duration-500 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 space-y-8">
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
            <div className="space-y-4">
              <p className="text-neutral-800 dark:text-neutral-200 font-medium">
                {t('footer.newsletter.title')}
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col xl:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="w-full xl:flex-1 px-5 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-full text-sm outline-none focus:border-[#8d6e63] dark:focus:border-[#d7ccc8] transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center mx-auto min-w-[160px] px-10 py-3 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-300 hover:border-[#8d6e63] hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-all duration-300 active:scale-95 antialiased"
                >
                  {status === 'loading'
                    ? `${t('footer.newsletter.status.sending')}`
                    : `${t('footer.newsletter.status.subscribe')}`}
                </button>
              </form>
              {status === 'success' && (
                <p className="text-[10px] text-neutral-500 leading-relaxed max-w-xs">
                  {t('footer.newsletter.status.success')}
                </p>
              )}
              <p className="text-[10px] text-neutral-500 leading-relaxed max-w-xs">
                {t('footer.newsletter.disclaimer')}
              </p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
              {t('footer.columns.cards.title')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name[lang]}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-colors"
                  >
                    {link.name[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
              {t('footer.columns.info.title')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.info.map((link) => (
                <li key={link.name[lang]}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-colors"
                  >
                    {link.name[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
              {t('footer.columns.social.title')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.social.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#8d6e63] dark:hover:text-[#d7ccc8] transition-colors group"
                  >
                    <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-500">
            {t('footer.bottom.copyright')}
          </p>
          <div className="flex gap-8 text-xs text-neutral-500">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
            >
              {t('footer.bottom.privacy')}
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
            >
              {t('footer.bottom.terms')}
            </Link>
            <Link
              href="/cookies"
              className="hover:text-black dark:hover:text-white transition-colors underline underline-offset-4"
            >
              {t('footer.bottom.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
