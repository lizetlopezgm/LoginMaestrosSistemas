/*
      Integrantes del equipo:
      Nombre: Jesús Rosiles González, num. control: s22120176
      Nombre: Lizet Guadalupe López Medina, num. control: s22120170
*/

import { Acceso } from "./pages/Acceso";
import { Registro } from "./pages/Registro";
import * as React from "react";
import "./styles.css";

export default function App() {
  const [maestroActual, setMaestroActual] = React.useState(null);

  return (
    <div className="App">
      {maestroActual ? (
        <Registro
          maestro={maestroActual}
          setActualizarMaestro={setMaestroActual}
        />
      ) : (
        <Acceso setActualizarMaestro={setMaestroActual} />
      )}
    </div>
  );
}
