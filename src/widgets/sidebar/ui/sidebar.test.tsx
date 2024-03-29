// libs;
import { fireEvent, render, screen } from '@testing-library/react';

// component;
import { Sidebar } from './sidebar';

// config;
import '@/shared/config/i18n/i18n';

describe(`Test suites for Sidebar (widgets)`, () => {
  test(`without props`, () => {
    render(<Sidebar />);
    expect(screen.getByTestId(`sidebar`)).toBeInTheDocument();
  });

  test(`check toggle`, () => {
    render(<Sidebar />);
    const toggleButton = screen.getByTestId(`sidebar-toggle`);
    fireEvent.click(toggleButton);
    expect(screen.getByTestId(`sidebar`)).toHaveClass(`collapsed`);
  });
});
