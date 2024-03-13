// libs;s
import { useTranslation } from 'react-i18next';

// helpers;
import { classNames } from '@/shared/lib';

// shared;
import { Button, ButtonTheme } from '@/shared/ui';

// styles;
import classes from './lang-switcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps): JSX.Element => {
  const { i18n, t } = useTranslation();
  const { className = `` } = props;

  const toggleLang = (): void => {
    void i18n.changeLanguage(i18n.language === `ru` ? `en` : `ru`);
  };

  return (
    <Button
      className={classNames(classes[`lang-switcher`], {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
    >
      {t(`Язык`)}
    </Button>
  );
};
