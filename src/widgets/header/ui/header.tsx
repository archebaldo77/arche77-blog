import { classNames } from '@/shared/lib';

import classes from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { className = `` } = props;

  return <header className={classNames(classes[`header`], {}, [className])} />;
};
