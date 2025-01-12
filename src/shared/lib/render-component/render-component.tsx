import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { i18nForTests } from '@/shared/config/i18n/i18n-config-for-tests';

import { type ReactElement } from 'react';

interface RenderComponentOptions {
  routes?: string[];
}

export const renderComponent = (
  Component: ReactElement,
  options: RenderComponentOptions = {},
): ReturnType<typeof render> => {
  const { routes = [`/`] } = options;

  return render(
    <MemoryRouter initialEntries={routes}>
      <I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>
    </MemoryRouter>,
  );
};
