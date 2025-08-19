import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ViteSSG } from "vite-ssg";
import { BrowserRouter } from "react-router-dom";

export const createApp = ViteSSG(
  () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  { routes: ["/", "/about", "/exports", "/imports", "/compliance", "/contact"] }
);
