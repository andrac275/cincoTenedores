import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import HolaMundo, { AdiosMundo } from "./components/HolaMundo";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "Andreu",
    edad: 32,
    color: "amarillo",
    // deporte:"cilcismo"
  };

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);
  useEffect(() => {
    //Este useEffect se ejecuta cada vez que la variable contar se actualiza
  }, [contar]);
  const encenderApagar = () => {
    //setStateCar(!stateCar);
    //lo de abajo es por si no se tiene acceso al 'stateCar' porque estamos en otro componente y solo
    //tenemos el setStateCar que nos lo han pasado en props
    setStateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };

  const saludarFn = (nombre, edad) => {
    console.log("Hola " + nombre + ", tiene " + edad + " años.");
    console.log(
      "mira el codigo en App.js y veras el 'templateStrings' que ahorra escribir caracteres para concatenar variables en strings"
    );
    console.log(`Hola ${nombre} tiene ${edad} años`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          (Ejemplo useState) El coche esta: {stateCar ? "Encendido" : "Apagado"}
        </h3>
        <button onClick={encenderApagar}>Endender / Apagar coche</button>
        <h4>(Ejemplo UseEffect) Clicks: {contar}</h4>
        <Saludar userInfo={user} saludarFn={saludarFn} />
        {/* <Saludar name="Andreu MP" edad="32" />
        <Saludar name="Pakaro" /> */}
        {/* <HolaMundo />
        <AdiosMundo /> */}
      </header>
    </div>
  );
}

export default App;
