// src/main.tsx
import { ViteSSG } from "vite-ssg";
import App from "./App";
import helmetPkg from "react-helmet-async";
const { HelmetProvider } = helmetPkg;

export const createApp = ViteSSG(
  () => (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  ),
  { routes: ["/"] }
);
