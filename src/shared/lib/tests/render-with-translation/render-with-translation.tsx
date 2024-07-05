// libraries;
import { Suspense, type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

// helpers;
import { i18nForTests } from '@/shared/config/i18n/i18n-for-tests';

export const renderWithTranslation = (Component: ReactNode): ReactNode => {
  return render(
    <I18nextProvider i18n={i18nForTests}>
      <Suspense fallback="Fake Loader...">{Component}</Suspense>
    </I18nextProvider>,
  );
};
