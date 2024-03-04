// pages;
import { Main } from '../main/main';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  return (
    <div className={classes.app}>
      <p>Hello world</p>
      <Main />
    </div>
  );
};
