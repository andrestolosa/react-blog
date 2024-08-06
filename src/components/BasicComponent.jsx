// importar la libreria principal REACT
import React from 'react';

let miObjeto = {};
let nombre = "Lorenzo";

// definir un componente funcional = funcion de JS tradicional
function BasicComponent() { // el nombre de la funcion debe empezar con MAYUSC
  // el elemento JSX
  // JSX es una combinacion de HTML, CSS y JS {} con una sintaxis especifica
  return (
    <>
      <h1 className='header'>lo que yo coloque aca se va a renderizar en mi app</h1>
      <p style={{backgroundColor: "red", color: "white"}}>Esto es una parrafo</p>
      <p>Mi perro se llama: <strong>{nombre}</strong></p>
    </>
  )
}

export default BasicComponent // debemos exportar el componente