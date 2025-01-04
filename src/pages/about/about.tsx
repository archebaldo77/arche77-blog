import { classNames } from '../../../helpers/class-names/class-names';

import classes from './about.module.scss';

export const About = (): JSX.Element => {
  return <div className={classNames(classes[`about`])}>О нас</div>;
};

export default About;
