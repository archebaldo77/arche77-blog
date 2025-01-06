import { AppRouter } from '@/app/providers/router-provider';

import { Header } from '@/widgets/header';

import { classNames } from '@/shared/lib';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  return (
    <div className={classNames(classes[`app`])}>
      <Header />
      <br />
      <AppRouter />
    </div>
  );
};
