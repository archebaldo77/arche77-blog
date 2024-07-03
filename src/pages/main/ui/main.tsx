// libraries;
import { useTranslation } from 'react-i18next';

export const Main = () => {
  const { t } = useTranslation(`main`);

  return <div>{t(`Главная страница`)}</div>;
};

export default Main;
