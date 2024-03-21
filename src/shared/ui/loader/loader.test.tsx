// libs;
import { render, screen } from '@testing-library/react';

// component;
import { Loader } from './loader';

describe(`Test suites for Loader (shared)`, () => {
  test(`without props`, () => {
    render(<Loader />);
    expect(screen.getByTestId(`loader`)).toBeInTheDocument();
  });
});
