// libs;
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components;
import { App } from './components/app/app';

import './styles/style.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById(`root`)
);
