import i18nForTests from 'i18next';
import { initReactI18next } from 'react-i18next';

i18nForTests.use(initReactI18next).init({
  lng: `ru`,
  fallbackLng: `ru`,

  interpolation: {
    escapeValue: false,
  },

  resources: { ru: {}, en: {} },
});

export { i18nForTests };
