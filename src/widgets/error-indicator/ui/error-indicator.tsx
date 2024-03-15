// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './error-indicator.module.scss';
import { useTranslation } from 'react-i18next';

interface ErrorIndicatorProps {
  className?: string;
}

export const ErrorIndicator = (props: ErrorIndicatorProps): JSX.Element => {
  const { t } = useTranslation();
  const { className = `` } = props;

  return (
    <div className={classNames(classes[`error-indicator`], {}, [className])}>
      {t(`Ошибка`)}
    </div>
  );
};
