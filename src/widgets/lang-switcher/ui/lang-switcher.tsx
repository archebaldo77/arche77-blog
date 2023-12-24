// packages;
import { useTranslation } from "react-i18next";

// functions
import { classNames } from "@/shared/lib";

// components;
import { Button, ButtonTheme } from "@/shared/ui";

// styles;
import cls from "./lang-switcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export enum Language {
  RU = `ru`,
  EN = `en`,
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const { className } = props;

  const toggleLang = () => {
    i18n.changeLanguage(
      i18n.language === Language.RU ? Language.EN : Language.RU
    );
  };

  return (
    <Button
      className={classNames(cls[`lang-switcher`], {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
    >
      {i18n.language === Language.RU
        ? Language.EN.toLocaleUpperCase()
        : Language.RU.toLocaleUpperCase()}
    </Button>
  );
};
