import React from "react";

export default function HolaMundo() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <h2>Andreu MP</h2>
    </div>
  );
}

export function AdiosMundo() {
  return (
    <div>
      <h3>Adios mundo</h3>
      <p>
        Lo suyo habria sido crear AdiosMundo en un componente a parte, que cada
        componente tenga solo un export default, pero lo he puesto en este
        componente para ver la diferencia entre el export default y el export
        que no es default y ver como se importa des de App.js
      </p>
    </div>
  );
}
