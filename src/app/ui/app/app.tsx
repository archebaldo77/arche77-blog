// providers;
import { AppRouter } from '@/app/providers/router-provider';
import { useTheme } from '@/app/providers/theme-provider';

// widgets;
import { Header } from '@/widgets/header';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './app.module.scss';

export const App = (): JSX.Element => {
  const [theme] = useTheme();

  return (
    <div className={classNames(classes.app, {}, [theme])}>
      <Header />
      <AppRouter />
    </div>
  );
};
