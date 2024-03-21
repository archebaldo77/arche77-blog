// libs;
import { render, screen } from '@testing-library/react';

// component;
import { ErrorIndicator } from './error-indicator';

// config;
import '@/shared/config/i18n/i18n';

describe(`Test suites for ErrorIndicator (widgets)`, () => {
  test(`without props`, () => {
    render(<ErrorIndicator />);
    expect(screen.getByTestId(`error-indicator`)).toBeInTheDocument();
  });
});
