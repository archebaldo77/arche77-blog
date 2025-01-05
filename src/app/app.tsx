import { Link } from 'react-router-dom';

import { AppRouter } from '@/app/providers/router-provider';
import { useTheme } from '@/app/providers/theme-provider';

import { classNames } from '@/shared/lib';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  const { toggleTheme } = useTheme();

  return (
    <div className={classNames(classes[`app`])}>
      <header className={classNames(classes[`header`])}>
        <Link to={`/`}>Главная страница</Link>
        <Link to={`/about`}>О нас</Link>
        <button onClick={toggleTheme}>Изменить тему</button>
      </header>
      <br />
      <AppRouter />
    </div>
  );
};
