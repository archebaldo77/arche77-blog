// helpers;
import { classNames } from '@/shared/lib';

// shared;
import { Loader } from '@/shared/ui';

// styles;
import classes from './page-loader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps): JSX.Element => {
  const { className = `` } = props;

  return (
    <div
      data-testid="page-loader"
      className={classNames(classes[`page-loader`], {}, [className])}
    >
      <Loader />
    </div>
  );
};
