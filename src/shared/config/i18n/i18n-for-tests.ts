// libraries;
import i18nForTests from 'i18next';
import { initReactI18next } from 'react-i18next';

i18nForTests
  .use(initReactI18next)
  .init({
    lng: `ru`,
    fallbackLng: `ru`,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error) => {
    console.log(error.message);
  });

export { i18nForTests };
