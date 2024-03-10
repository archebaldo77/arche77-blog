// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps): JSX.Element => {
  const { className = `` } = props;

  return <div className={classNames(classes[`loader`], {}, [className])} />;
};
