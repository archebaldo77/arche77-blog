// libs;
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components;
import { App } from '@/app/ui';

// providers;
import { ThemeProvider } from '@/app/providers/theme-provider';

// styles;
import '@/app/styles/style.scss';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById(`root`)
);
