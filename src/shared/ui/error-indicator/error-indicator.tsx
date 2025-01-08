import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui/button/button';
import { AppLink } from '@/shared/ui/app-link/app-link';

import { routePath } from '@/app/providers/router-provider';

import { classNames } from '@/shared/lib';

import classes from './error-indicator.module.scss';

interface ErrorIndicatorProps {
  className?: string;
}

export const ErrorIndicator = (props: ErrorIndicatorProps): JSX.Element => {
  const { className = `` } = props;
  const { t } = useTranslation(`not-found`);

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(classes[`error-indicator`], {}, [className])}>
      <p className={classNames(classes[`title`])}>
        {t(`Что-то пошло не так :(`)}
      </p>
      <div className={classNames(classes[`controls`])}>
        <Button onClick={reloadPage} theme={ButtonTheme.OUTLINE_PRIMARY}>
          {t(`Перезагрузить страницу`)}
        </Button>
        <AppLink to={routePath.main}>{t(`На главную страницу`)}</AppLink>
      </div>
    </div>
  );
};
