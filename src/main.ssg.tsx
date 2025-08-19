import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ViteSSG } from "vite-ssg";
import helmetPkg from "react-helmet-async";
const { HelmetProvider } = helmetPkg;
import { BrowserRouter } from "react-router-dom";
const isClient = typeof window !== "undefined";

export const createApp = ViteSSG(
  () =>
    isClient ? (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    ) : (
      <App />
    ),
  { routes: ["/"] }
);