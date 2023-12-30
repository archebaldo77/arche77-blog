import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: `ru`,
    fallbackLng: `ru`,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: { ru: { translations: {} } },
  })
  .catch((error: Error) => {
    console.log(`An error has occurred: ${error.stack}`);
  });

export default i18n;
