import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/app';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { ErrorBoundary } from '@/app/providers/error-boundary';

import '@/shared/config/i18n/i18n-config';

import '@/app/styles/style.scss';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback='Loading translations...'>
          <App />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById(`root`),
);
