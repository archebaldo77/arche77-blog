// libs;
import { useTranslation } from 'react-i18next';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './main.module.scss';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation(`pages/main`);

  return <h2 className={classNames(classes.main)}>{t(`Главная страница`)}</h2>;
};

export default MainPage;
