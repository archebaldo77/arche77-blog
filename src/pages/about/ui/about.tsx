// libraries;
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation(`about`);
  return <div>{t(`О нас`)}</div>;
};

export default About;
