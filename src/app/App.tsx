import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";
import "../styles/index.css";
import { HashRouter, Routes, Route } from 'react-router-dom'
// به جای RouterProvider یا BrowserRouter


export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
