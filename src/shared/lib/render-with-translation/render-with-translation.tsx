// packages;
import { render, type RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

// configs;
import i18n from '@/shared/config/i18n/i18n-for-tests';

// types;
import type { ReactNode } from 'react';

export const renderWithTranslation = (component: ReactNode): RenderResult => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
};
