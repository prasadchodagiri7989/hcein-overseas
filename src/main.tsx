// src/main.ssg.tsx
import App from "./App";
import { ViteSSG } from "vite-ssg";
import helmetPkg from "react-helmet-async";

const { HelmetProvider } = helmetPkg;

// vite-ssg will handle SSR/SSG + hydration for you
export const createApp = ViteSSG(
  () => (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  ),
  {
    routes: ["/"], // you only need "/" since it's an SPA
  }
);
