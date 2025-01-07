import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';

import classes from './main.module.scss';

export const Main = (): JSX.Element => {
  const { t } = useTranslation(`main`);

  return (
    <div className={classNames(classes[`main`])}>{t(`Главная страница`)}</div>
  );
};

export default Main;
