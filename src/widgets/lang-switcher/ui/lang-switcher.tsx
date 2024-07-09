// libraries;
import { useTranslation } from 'react-i18next';

// shared;
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './lang-switcher.module.scss';

enum AppLang {
  RU = `ru`,
  EN = `en`,
}

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps): JSX.Element => {
  const { className = ``, short = false } = props;

  const { t, i18n } = useTranslation();

  const toggleLanguage = async (): Promise<void> => {
    await i18n.changeLanguage(
      i18n.language === AppLang.RU ? AppLang.EN : AppLang.RU,
    );
  };

  return (
    <Button
      className={classNames(classes[`lang-switcher`], {}, [className])}
      theme={ButtonTheme.CLEAR_INVERTED}
      size={ButtonSize.L}
      onClick={toggleLanguage}
    >
      {short ? t(`Мини язык`) : t(`Язык`)}
    </Button>
  );
};
