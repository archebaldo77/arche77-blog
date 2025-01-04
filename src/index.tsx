import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/app/app';

import './style.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById(`root`)
);
