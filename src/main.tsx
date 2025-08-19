import { createRoot } from 'react-dom/client'
// ✅ Fix
import helmetPkg from "react-helmet-async";
const { HelmetProvider } = helmetPkg;
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
