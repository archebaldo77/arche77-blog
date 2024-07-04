// libraries;
import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// providers;
import { ThemeProvider } from '@/app/providers/theme';
import { ErrorBoundary } from '@/app/providers/error-boundary';

// components;
import { App } from '@/app/app';

// shared;
import { Spinner } from '@/shared/ui';

// i18n;
import '@/shared/config/i18n/i18n';

// styles;
import '@/app/styles/style.scss';

render(
  <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById(`root`),
);
