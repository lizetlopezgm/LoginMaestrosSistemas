/*
      Integrantes del equipo:
      Nombre: Jesús Rosiles González, num. control: s22120176
      Nombre: Lizet Guadalupe López Medina, num. control: s22120170
*/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
