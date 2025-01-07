import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';

import classes from './not-found.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = (props: NotFoundProps): JSX.Element => {
  const { className = `` } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(classes[`not-found`], {}, [className])}>
      {t(`Страница не найдена`)}
    </div>
  );
};
