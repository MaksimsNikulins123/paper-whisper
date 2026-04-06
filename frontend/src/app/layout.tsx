import { Providers } from '@/components/ui/providers';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Открытки ручной работы с персонализацией — быстрое изготовление и доставка',
  description:
    'Закажите handmade открытку с вашим текстом, именем, датой и фото. Мастера изготавливают за 20–60 минут. Доставка напрямую получателю. Категории: День рождения, Свадьба, Спортивные победы.',
  icons: {
    icon: '/header_images/logo.svg',
    shortcut: '/header_images/logo.svg',
    apple: '/header_images/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
