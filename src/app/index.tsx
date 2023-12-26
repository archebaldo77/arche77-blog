// functions;
import { useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib';

// styles;
import cls from './index.module.scss';

// components;
import { Header } from '@/widgets/header';
import { AppRouter } from '@/app/providers/app-router';
import { Sidebar } from '@/widgets/sidebar';

interface AppProps {
  className?: string;
}

export const App = (props: AppProps): JSX.Element => {
  const [theme] = useTheme();

  const { className } = props;

  return (
    <div className={classNames(cls.app, {}, [theme, className ?? ``])}>
      <Header />
      <div className={classNames(cls[`app-content`])}>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
