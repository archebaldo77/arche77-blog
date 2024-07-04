// libraries;
import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// providers;
import { ThemeProvider } from '@/app/providers/theme';

// components;
import { App } from '@/app/app';

// i18n;
import '@/shared/config/i18n/i18n';

// styles;
import '@/app/styles/style.scss';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="Загрузка...">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById(`root`),
);
