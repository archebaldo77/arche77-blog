// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './not-found.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = (props: NotFoundProps): JSX.Element => {
  const { className = `` } = props;

  return (
    <div className={classNames(classes[`not-found`], {}, [className])}>
      Page Not Found
    </div>
  );
};
