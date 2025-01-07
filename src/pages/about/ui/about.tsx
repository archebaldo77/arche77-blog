import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';

import classes from './about.module.scss';

export const About = (): JSX.Element => {
  const { t } = useTranslation(`about`);
  return <div className={classNames(classes[`about`])}>{t(`О нас`)}</div>;
};

export default About;
