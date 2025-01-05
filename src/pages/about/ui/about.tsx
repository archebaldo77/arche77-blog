import { classNames } from '@/shared/lib';

import classes from './about.module.scss';

export const About = (): JSX.Element => {
  return <div className={classNames(classes[`about`])}>О нас</div>;
};

export default About;
