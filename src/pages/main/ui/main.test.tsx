// libs;
import { render, screen } from '@testing-library/react';

// component;
import Main from './main';

describe(`Test suites for Main (pages)`, () => {
  test(`without props`, () => {
    render(<Main />);
    expect(screen.getByTestId(`main`)).toBeInTheDocument();
  });
});
