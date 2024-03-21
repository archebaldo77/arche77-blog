// libs;
import { render, screen } from '@testing-library/react';

// component;
import { ThemeSwitcher } from './theme-switcher';

describe(`Test suites for ThemeSwitcher (widgets)`, () => {
  test(`without props`, () => {
    render(<ThemeSwitcher />);
    expect(screen.getByTestId(`theme-switcher`)).toBeInTheDocument();
  });
});
