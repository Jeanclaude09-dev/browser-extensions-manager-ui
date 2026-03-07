import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/themeContext";
import { ContextProvider } from "./context/appContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <App className="dark:bg-dark-gradient" />
      </ContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
