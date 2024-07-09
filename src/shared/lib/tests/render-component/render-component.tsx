// libraries;
import { render, type RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

// helpers
import { i18nForTests } from '@/shared/config/i18n/i18n-for-tests';

// types;
import { Suspense, type ReactNode } from 'react';

interface RenderComponentProps {
  routes?: string[];
}

export const renderComponent = (
  component: ReactNode,
  options: RenderComponentProps = {},
): RenderResult => {
  const { routes = [`/`] } = options;

  return render(
    <MemoryRouter initialEntries={routes}>
      <I18nextProvider i18n={i18nForTests}>
        <Suspense fallback="Fake Loading...">{component}</Suspense>
      </I18nextProvider>
    </MemoryRouter>,
  );
};
