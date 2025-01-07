import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui';

import { classNames } from '@/shared/lib';

import classes from './language-switcher.module.scss';

enum AppLanguage {
  EN = `en`,
  RU = `ru`,
}

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps): JSX.Element => {
  const { className = `` } = props;
  const { t, i18n } = useTranslation();

  const onToggleLanguage = () => {
    const newLanguage =
      i18n.language === AppLanguage.RU ? AppLanguage.EN : AppLanguage.RU;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button
      className={classNames(classes[`language-switcher`], {}, [className])}
      theme={ButtonTheme.INVERTED_PRIMARY}
      onClick={onToggleLanguage}>
      {t(`Язык`)}
    </Button>
  );
};
