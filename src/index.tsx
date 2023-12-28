// packages;
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components;
import { App } from '@/app';
import { ErrorIndicator } from '@/widgets/error-indicator';

// functions;
import { ThemeProvider } from '@/app/providers/theme-provider';
import { ErrorBoundary } from './app/providers/error-boundary';

// configs;
import '@/shared/config';

// styles;
import '@/app/styles/style.scss';

render(
  <ErrorBoundary fallback={<ErrorIndicator />}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById(`root`)
);
