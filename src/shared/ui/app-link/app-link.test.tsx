// libs;
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// component;
import { AppLink, AppLinkTheme } from './app-link';

describe(`Test suites for AppLink (shared)`, () => {
  test(`with <to=/> [props]`, () => {
    render(
      <MemoryRouter basename="/">
        <AppLink to={`/`}>Test</AppLink>
      </MemoryRouter>,
    );
    expect(screen.getByTestId(`app-link`)).toHaveAttribute(`href`);
  });

  test(`with <theme=primary> [props]`, () => {
    render(
      <MemoryRouter basename="/">
        <AppLink
          to={`/`}
          theme={AppLinkTheme.PRIMARY}
        >
          Test
        </AppLink>
      </MemoryRouter>,
    );
    expect(screen.getByTestId(`app-link`)).toHaveClass(`primary`);
  });

  test(`with <theme=secondary> [props]`, () => {
    render(
      <MemoryRouter basename="/">
        <AppLink
          to={`/`}
          theme={AppLinkTheme.SECONDARY}
        >
          Test
        </AppLink>
      </MemoryRouter>,
    );
    expect(screen.getByTestId(`app-link`)).toHaveClass(`secondary`);
  });
});
