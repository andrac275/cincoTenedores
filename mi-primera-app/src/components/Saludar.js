import React from "react";

export default function Saludar(props) {
  //Esto es una asignacion por Destructuring. Es para meter en constantes cada uno de los props
  //asi no se tiene que llamar props.userInfo, sino solo userInfo. (por ejemplo)
  const { userInfo, saludarFn } = props;
  const { nombre, edad, color, deporte = "no lo ha dicho" } = userInfo; //Otro destructuring, esta vez de userInfo
  return (
    <div>
      <h2>
        Hola {nombre}, tiene {edad} años y su color favorito es {color}, le
        encanta el siguiente deporte: "{deporte}"
      </h2>
      <button onClick={() => saludarFn(nombre, edad)}>
        Saludar en CLG del navegador
      </button>
      <p>
        Esto es un ejemplo de componente reutilizable que recibe informacion a
        traves de los props
      </p>
    </div>
  );
}
