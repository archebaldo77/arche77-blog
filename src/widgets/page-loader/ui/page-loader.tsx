import { Spinner } from '@/shared/ui';

import { classNames } from '@/shared/lib';

import classes from './page-loader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps): JSX.Element => {
  const { className = `` } = props;

  return (
    <div className={classNames(classes[`page-loader`], {}, [className])}>
      <Spinner />
    </div>
  );
};
