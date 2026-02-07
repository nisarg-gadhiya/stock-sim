import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { PortfolioProvider } from "./context/PortfolioContext";
import { ToastProvider } from "./context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <PortfolioProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PortfolioProvider>
    </ToastProvider>
  </React.StrictMode>
);
