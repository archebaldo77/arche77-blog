// libraries;
import { screen } from '@testing-library/react';

// shared;
import { Button, ButtonTheme } from './button';

// helpers;
import { renderComponent } from '@/shared/lib';

describe(`Test suites for Button (shared)`, () => {
  test(`with <theme=clear> [props]`, () => {
    renderComponent(<Button theme={ButtonTheme.CLEAR}>Click Me</Button>);
    expect(screen.getByTestId(`button`)).toHaveClass(`clear`);
  });

  test(`without props`, () => {
    renderComponent(<Button>Click Me</Button>);
    expect(screen.getByTestId(`button`)).toBeInTheDocument();
    expect(screen.getByTestId(`button`)).toHaveClass(`button`);
  });
});
