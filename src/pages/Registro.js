/*
      Integrantes del equipo:
      Nombre: Jesús Rosiles González, num. control: s22120176
      Nombre: Lizet Guadalupe López Medina, num. control: s22120170
*/

import { Banner } from "../components/Banner";
import {
  TextField,
  Autocomplete,
  Slider,
  Input,
  Stack,
  Button,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";
import "./styles.css";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Chip from "@mui/material/Chip";

export function Registro(props) {
  const [materias, setMaterias] = React.useState([]);
  const [cantAlumnos, setCantAlumnos] = React.useState(0);
  const [atSeleccionado, setAtSeleccionado] = React.useState("at1");

  const software = [
    { label: "Apache netbeans", id: 1 },
    { label: "Codeblocks", id: 2 },
    { label: "Arduino", id: 3 },
    { label: "Word", id: 4 },
    { label: "Chrome", id: 5 },
    { label: "Visual Studio", id: 6 },
    { label: "Intellij", id: 7 },
  ];

  const materiasISC = [
    "Tópicos Avanzados de Programación",
    "Cálculo Diferencial",
    "Graficación",
  ];

  const materiasIND = [
    "Herramientas Intelectuales",
    "Cálculo Diferencial",
    "Software Herramientas Intelectuales",
  ];

  const materiasSEM = [
    "Programación",
    "Cálculo Diferencial",
    "Cambio de Aceite I",
  ];
  const materiasELE = [
    "Electromagnetismo",
    "Cálculo Diferencial",
    "Microcontroladores",
  ];

  const materiasISA = [
    "Programación",
    "Cálculo Diferencial",
    "Cambio de Aceite I",
  ];

  const materiasAMB = ["Biología", "Cálculo Diferencial ", "FisioquímicaI"];

  const materiasGAS = [
    "Introducción a la Gastronomía",
    "Cocina Mexicana",
    "Coctelería",
  ];

  const carreras = [
    { label: "Ing. Sistemas Computacionales", id: 1 },
    { label: "Ing. Industrial", id: 2 },
    { label: "Ing. Semiconductores", id: 3 },
    { label: "Ing. Electrónica", id: 4 },
    { label: "Ing. Sistemas Automotrices", id: 5 },
    { label: "Ing. Ambiental", id: 6 },
    { label: "Gastronomía", id: 7 },
  ];

  function onAtChange(event, newAt) {
    //alert("Se cambio a " + newAt);
    setAtSeleccionado(newAt);
  }

  function sliderCantAlumnosChange(event, nuevaCantAlumnos) {
    setCantAlumnos(nuevaCantAlumnos);
  }

  function inputCantAlumnosChange(event) {
    setCantAlumnos(event.target.value);
  }

  function onCarreraChange(event, carreraSeleccionada) {
    if (carreraSeleccionada) {
      //alert(carreraSeleccionada.id);
      switch (carreraSeleccionada.id) {
        case 1:
          setMaterias(materiasISC);
          break;
        case 2:
          setMaterias(materiasIND);
          break;
        case 3:
          setMaterias(materiasSEM);
          break;
        case 4:
          setMaterias(materiasELE);
          break;
        case 5:
          setMaterias(materiasISA);
          break;
        case 6:
          setMaterias(materiasAMB);
          break;
        case 7:
          setMaterias(materiasGAS);
          break;
      }
    }
  }

  function onBotonGuardarClick(event) {
    /* devolver la variable de estado en el componente APP a null*/
    props.setActualizarMaestro(null);
  }

  return (
    <div className="Registro">
      <Banner />
      <div className="contenedor">
        <div className="infoRegistro">
          <h4 style={{ paddingTop: 20 }}>Docente: {props.maestro.nombre} </h4>
          <p>Aula tecnológica:</p>
          <ToggleButtonGroup
            id="toggle-button-aula"
            color="primary"
            value={atSeleccionado}
            onChange={onAtChange}
            exclusive
            aria-label="Aula tecnológica"
          >
            <ToggleButton value="at1" className="toggleButton">
              AT1
            </ToggleButton>
            <ToggleButton value="at2" className="toggleButton">
              AT2
            </ToggleButton>
            <ToggleButton value="at3" className="toggleButton">
              AT3
            </ToggleButton>
            <ToggleButton value="at4" className="toggleButton">
              AT4
            </ToggleButton>
            <ToggleButton value="at5" className="toggleButton">
              AT5
            </ToggleButton>
          </ToggleButtonGroup>

          <br />
          <p>Carrera:</p>
          <Autocomplete
            disablePortal
            id="combo-box-carrera"
            options={carreras}
            onChange={onCarreraChange}
            renderInput={(params) => (
              <TextField {...params} placeholder="Seleccione una carrera." />
            )}
          />

          <br />
          <p>Materia:</p>
          <Autocomplete
            disablePortal
            id="combo-box-materia"
            options={materias}
            renderInput={(params) => (
              <TextField {...params} placeholder="Seleccione una carrera." />
            )}
          />

          <p style={{ marginTop: 30 }}>Softwares utilizados:</p>
          <Autocomplete
            multiple
            id="softwares-utilizados"
            options={software}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                //label="Softwares utilizados"
                placeholder="Softwares utilizados"
              />
            )}
          />

          <p style={{ paddingTop: 25 }}>Cantidad de alumnos:</p>
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1 }}
            alignItems="center"
            style={{ paddingBottom: 20 }}
          >
            <Slider
              value={cantAlumnos}
              onChange={sliderCantAlumnosChange}
              min={0}
              max={45}
              aria-labelledby="input-slider"
            />
            <Input
              value={cantAlumnos}
              size="small"
              onChange={inputCantAlumnosChange}
              inputProps={{
                step: 1,
                min: 0,
                max: 45,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Stack>

          <div
            className="botonesFin"
            style={{ display: "inline-flex", marginBottom: 30, marginTop: 10 }}
          >
            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              onClick={onBotonGuardarClick}
              style={{ marginRight: 30 }}
            >
              Regresar
            </Button>
            <Button
              variant="outlined"
              startIcon={<SaveAltIcon />}
              onClick={onBotonGuardarClick}
            >
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
