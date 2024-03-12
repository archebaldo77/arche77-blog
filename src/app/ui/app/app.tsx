// providers;
import { AppRouter } from '@/app/providers/router-provider';
import { useTheme } from '@/app/providers/theme-provider';

// widgets;
import { Header } from '@/widgets/header';
import { Sidebar } from '@/widgets/sidebar';

// config;
import '@/shared/config/i18n/i18n';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './app.module.scss';

export const App = (): JSX.Element => {
  const [theme] = useTheme();

  return (
    <div className={classNames(classes.app, {}, [theme])}>
      <Header />
      <div className={classNames(classes[`content`])}>
        <Sidebar />
        <div className={classNames(classes[`page`])}>
          <AppRouter />
        </div>
      </div>
    </div>
  );
};
