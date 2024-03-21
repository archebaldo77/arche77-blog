// libs;
import { render, screen } from '@testing-library/react';

// component;
import About from './about';

// config;
import '@/shared/config/i18n/i18n';

describe(`Test suites for About (pages)`, () => {
  test(`without props`, () => {
    render(<About />);
    expect(screen.getByTestId(`about`)).toBeInTheDocument();
  });
});
