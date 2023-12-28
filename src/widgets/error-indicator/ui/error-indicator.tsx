// packages;
import { useTranslation } from 'react-i18next';

// functions;
import { classNames } from '@/shared/lib';

// styles;
import cls from './error-indicator.module.scss';

interface ErrorIndicatorProps {
  className?: string;
}

export const ErrorIndicator = (props: ErrorIndicatorProps): JSX.Element => {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <div className={classNames(cls[`error-indicator`], {}, [className ?? ``])}>
      <p className={classNames(cls.title)}>{t(`Произошла ошибка`)}</p>
      <p className={classNames(cls.subtitle)}>
        {t(`Попробуйте перезагрузить страницу`)}
      </p>
    </div>
  );
};
