import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './sidebar';

import { renderWithTranslations } from '@/shared/lib';

describe(`Test suites for <Sidebar> component`, () => {
  test(`Should render in the document`, () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId(`sidebar`)).toBeInTheDocument();
  });

  test(`Should has correct class after click on button (collapsed)`, () => {
    renderWithTranslations(<Sidebar />);

    const button = screen.getByTestId(`sidebar-button`);
    fireEvent.click(button);

    expect(screen.getByTestId(`sidebar`)).toHaveClass(`collapsed`);
  });
});
