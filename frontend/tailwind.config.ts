import type { Config } from 'tailwindcss';

const config: Config = {
  // 'class' говорит Tailwind искать класс .dark на теге <html>
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Здесь можно добавить свои брендовые цвета
        brand: {
          light: '#fdfaf7',
          dark: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
