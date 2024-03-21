// libs;
import { render, screen } from '@testing-library/react';

// component;
import { LangSwitcher } from './lang-switcher';

// config;
import '@/shared/config/i18n/i18n';

describe(`Test suites for LangSwitcher (widgets)`, () => {
  test(`without props`, () => {
    render(<LangSwitcher />);
    expect(screen.getByTestId(`lang-switcher`)).toBeInTheDocument();
  });
});
