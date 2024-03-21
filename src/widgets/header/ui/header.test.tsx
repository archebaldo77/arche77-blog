// libs;
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// component;
import { Header } from './header';

describe(`Test suites for Header (widgets)`, () => {
  test(`without props`, () => {
    render(
      <MemoryRouter basename="/">
        <Header />
      </MemoryRouter>,
    );
    expect(screen.getByTestId(`header`)).toBeInTheDocument();
  });
});
