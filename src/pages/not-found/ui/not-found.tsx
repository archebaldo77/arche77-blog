// libraries;
import { useTranslation } from 'react-i18next';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './not-found.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = (props: NotFoundProps): JSX.Element => {
  const { className = `` } = props;

  const { t } = useTranslation(`not-found`);

  return (
    <div className={classNames(classes[`not-found`], {}, [className])}>
      {t(`404`)}
    </div>
  );
};
