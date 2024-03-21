// libs;
import { render, screen } from '@testing-library/react';

// component;
import { Button, ButtonTheme } from './button';

describe(`Test suites for Button (shared)`, () => {
  test(`with <theme=clear> [props]`, () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByTestId(`button`)).toHaveClass(`clear`);
  });

  test(`without props`, () => {
    render(<Button>Test</Button>);
    expect(screen.getByTestId(`button`)).toBeInTheDocument();
  });
});
