// packages;
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// components;
import { App } from "@/app";

// functions;
import { ThemeProvider } from "@/app/providers/theme-provider";

// configs;
import "@/shared/config";

// styles;
import "@/app/styles/style.scss";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById(`root`)
);
