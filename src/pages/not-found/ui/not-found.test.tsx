// libs;
import { render, screen } from '@testing-library/react';

// component;
import { NotFound } from './not-found';

describe(`Test suites for NotFound (pages)`, () => {
  test(`without props`, () => {
    render(<NotFound />);
    expect(screen.getByTestId(`not-found`)).toBeInTheDocument();
  });
});
