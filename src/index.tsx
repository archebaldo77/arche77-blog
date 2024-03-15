// libs;
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components;
import { App } from '@/app/ui';

// providers;
import { ErrorBoundary } from '@/app/providers/error-boundary';
import { ThemeProvider } from '@/app/providers/theme-provider';

// widgets;
import { ErrorIndicator } from '@/widgets/error-indicator';

// styles;
import '@/app/styles/style.scss';

render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorIndicator />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById(`root`),
);
