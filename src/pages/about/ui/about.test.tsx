// libs;
import { render, screen } from '@testing-library/react';

// component;
import About from './about';

describe(`Test suites for About (pages)`, () => {
  test(`without props`, () => {
    render(<About />);
    expect(screen.getByTestId(`about`)).toBeInTheDocument();
  });
});
