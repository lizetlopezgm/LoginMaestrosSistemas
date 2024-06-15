/*
      Integrantes del equipo:
      Nombre: Jesús Rosiles González, num. control: s22120176
      Nombre: Lizet Guadalupe López Medina, num. control: s22120170
*/

import LoginIcon from "@mui/icons-material/Login";
import { Banner } from "../components/Banner";
import { IconButton, InputAdornment, Button, TextField } from "@mui/material";
import * as React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export function Acceso(props) {
  /* Controlador */

  //Variable para almacenar el valor de la clave docente capturado
  //let clavedocente = "";
  const [clavedocente, setClavedocente] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  //Estos maestros se deberían recuperar de una fuente de datos más adelante
  const maestros = [
    { nombre: "Germán Guzmán Guzmán", clave: "001" },
    { nombre: "Germán Gutierrez Torres", clave: "002" },
    { nombre: "Fernando Jose Martinez", clave: "003" },
  ];

  function onTxtClaveChange(event) {
    setClavedocente(event.target.value);
  }

  function onBotonEntrarClick(event) {
    /*Aquí va la lógica para validar el acceso */
    var maestroEncontrado = null;
    for (const maestro of maestros) {
      //alert(maestro.clave);
      if (maestro.clave == clavedocente) {
        maestroEncontrado = maestro;
        break;
      }
    }

    if (maestroEncontrado) {
      props.setActualizarMaestro(maestroEncontrado);
    } else {
      alert("Acceso denegado");
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /* Vista */
  return (
    <div className="Acceso">
      <Banner />

      <div className="contenedor" id="Contenedor">
        <div className="info">
          <h1 id="AulasT" style={{ paddingTop: 30 }}>
            Registro Aulas Tecnológicas
          </h1>
          <h2 id="Bienvenido">Bienvenido!!</h2>
          <p style={{ paddingTop: 20, paddingBottom: 5 }}>
            Por favor registrate
          </p>
          <TextField
            style={{ paddingBottom: 20 }}
            onChange={onTxtClaveChange}
            label="Clave docente"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <br />
          <br />
          <Button
            variant="outlined"
            onClick={onBotonEntrarClick}
            startIcon={<LoginIcon />}
            style={{ marginBottom: 30 }}
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
