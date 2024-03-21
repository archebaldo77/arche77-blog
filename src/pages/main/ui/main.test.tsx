// libs;
import { render, screen } from '@testing-library/react';

// component;
import Main from './main';

// config;
import '@/shared/config/i18n/i18n';

describe(`Test suites for Main (pages)`, () => {
  test(`without props`, () => {
    render(<Main />);
    expect(screen.getByTestId(`main`)).toBeInTheDocument();
  });
});
