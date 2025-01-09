import { render, type RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import { i18nForTests } from '@/shared/config/i18n/i18n-config-for-tests';

import { type ReactElement } from 'react';

export const renderWithTranslations = (
  Component: ReactElement,
  options: Omit<RenderOptions, `queries`> = {},
): ReturnType<typeof render> => {
  return render(
    <I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>,
    options,
  );
};
