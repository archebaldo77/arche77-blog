import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import {
  StoreProvider,
  type StateSchema,
} from '@/app/providers/store-provider';
import { i18nForTests } from '@/shared/config/i18n/i18n-config-for-tests';

import { type ReactElement } from 'react';

interface RenderComponentOptions {
  routes?: string[];
  initialState?: Partial<StateSchema>;
}

export const renderComponent = (
  Component: ReactElement,
  options: RenderComponentOptions = {},
): ReturnType<typeof render> => {
  const { routes = [`/`], initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={routes}>
        <I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>
      </MemoryRouter>
      ,
    </StoreProvider>,
  );
};
