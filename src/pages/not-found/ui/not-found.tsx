// libs;
import { useTranslation } from 'react-i18next';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './not-found.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = (props: NotFoundProps): JSX.Element => {
  const { t } = useTranslation(`pages/not-found`);
  const { className = `` } = props;

  return (
    <div
      data-testid="not-found"
      className={classNames(classes[`not-found`], {}, [className])}
    >
      {t(`Страница не найдена`)}
    </div>
  );
};
