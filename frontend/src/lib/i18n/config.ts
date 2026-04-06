'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// ... ресурсы

i18n
  .use(initReactI18next)
  .init({
    resources: { /* ... */ },
    lng: 'ru', // установи начальный язык явно для теста
    fallbackLng: 'ru',
  });

export default i18n; // ОБЯЗАТЕЛЬНО!