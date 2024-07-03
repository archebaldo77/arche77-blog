// providers;
import { AppRouter } from '@/app/providers/router';

// widgets;
import { Header } from '@/widgets/header/ui/header';

// helpers;
import { useTheme } from './providers/theme';
import { classNames } from '@/shared/lib';

// styles;
import classes from './app.module.scss';

export const App = () => {
  const [theme] = useTheme();

  return (
    <div className={classNames(classes[`app`], {}, [theme])}>
      <Header />
      <div className={classNames(classes[`page`])}>
        <AppRouter />
      </div>
    </div>
  );
};
