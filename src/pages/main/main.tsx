import { classNames } from '../../../helpers/class-names/class-names';

import classes from './main.module.scss';

export const Main = (): JSX.Element => {
  return <div className={classNames(classes[`main`])}>Главная страница</div>;
};

export default Main;
