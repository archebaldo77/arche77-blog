// libs;
import { useTranslation } from 'react-i18next';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './about.module.scss';

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation(`pages/about`);

  return <h2 className={classNames(classes.about)}>{t(`О нас`)}</h2>;
};

export default AboutPage;
