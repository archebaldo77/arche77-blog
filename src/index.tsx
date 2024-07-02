// libraries;
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// providers;
import { ThemeProvider } from './theme/theme-provider';

// components;
import { App } from './components/app/app';

// styles;
import './styles/style.scss';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById(`root`)
);
