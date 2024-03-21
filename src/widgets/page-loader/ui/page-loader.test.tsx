// libs;
import { render, screen } from '@testing-library/react';

// component;
import { PageLoader } from './page-loader';

describe(`Test suites for PageLoader (widgets)`, () => {
  test(`without props`, () => {
    render(<PageLoader />);
    expect(screen.getByTestId(`page-loader`)).toBeInTheDocument();
  });
});
