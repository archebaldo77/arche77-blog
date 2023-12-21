// packages;
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// components;
import { App } from "./components/app/app";

// functions;
import { ThemeProvider } from "./themes/theme-provider";

// styles;
import "./styles/style.scss";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById(`root`)
);
