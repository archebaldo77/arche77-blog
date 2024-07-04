// libraries;
import { useTranslation } from 'react-i18next';

// shared;
import { Button, ButtonTheme } from '@/shared/ui';

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
}

export const LangSwitcher = (props: LangSwitcherProps): JSX.Element => {
  const { className = `` } = props;

  const { i18n } = useTranslation();

  const toggleLanguage = async (): Promise<void> => {
    await i18n.changeLanguage(
      i18n.language === AppLang.RU ? AppLang.EN : AppLang.RU,
    );
  };

  return (
    <Button
      className={classNames(classes[`lang-switcher`], {}, [className])}
      theme={ButtonTheme.PRIMARY_INVERTED}
      onClick={async () => {
        await toggleLanguage();
      }}
    >
      {i18n.language === AppLang.RU ? `English` : `Русский`}
    </Button>
  );
};
