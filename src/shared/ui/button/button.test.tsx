// libraries;
import { screen } from '@testing-library/react';

// shared;
import { Button, ButtonTheme } from './button';

// helpers;
import { renderWithTranslation } from '@/shared/lib';

describe(`Test suites for Button (shared)`, () => {
  test(`with <theme=clear> [props]`, () => {
    renderWithTranslation(<Button theme={ButtonTheme.CLEAR}>Click Me</Button>);
    expect(screen.getByTestId(`button`)).toHaveClass(`clear`);
  });

  test(`without props`, () => {
    renderWithTranslation(<Button>Click Me</Button>);
    expect(screen.getByTestId(`button`)).toBeInTheDocument();
    expect(screen.getByTestId(`button`)).toHaveClass(`button`);
  });
});
