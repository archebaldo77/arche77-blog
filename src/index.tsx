// libraries;
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// providers;
import { ThemeProvider } from './app/providers/theme';

// components;
import { App } from './app/app';

// styles;
import './app/styles/style.scss';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById(`root`)
);
