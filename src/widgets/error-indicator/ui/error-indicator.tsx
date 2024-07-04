// libraries;
import { useTranslation } from 'react-i18next';

// shared;
import { Button, ButtonTheme } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';
import { useTheme } from '@/app/providers/theme';

// styles;
import classes from './error-indicator.module.scss';

interface ErrorIndicatorProps {
  className?: string;
}

export const ErrorIndicator = (props: ErrorIndicatorProps): JSX.Element => {
  const { className = `` } = props;

  const { t } = useTranslation();
  const [theme] = useTheme();

  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div
      className={classNames(classes[`error-indicator`], {}, [className, theme])}
    >
      <p className={classNames(classes[`text`])}>
        {t(`Что-то пошло не так :(`)}
      </p>
      <Button
        theme={ButtonTheme.PRIMARY}
        onClick={reloadPage}
      >
        {t(`Перезагрузить страницу`)}
      </Button>
    </div>
  );
};
