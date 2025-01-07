import { classNames } from '@/shared/lib';

import classes from './spinner.module.scss';

interface SpinnerProps {
  className?: string;
}

export const Spinner = (props: SpinnerProps): JSX.Element => {
  const { className = `` } = props;

  return <div className={classNames(classes[`spinner`], {}, [className])} />;
};
