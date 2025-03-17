import { useState } from "react";
import './App.css';
import Autor from "./components/Autor";
import Mensaje from "./components/Mensaje";

const App = () => {
  return(
    <>

      <Autor 
        nombre="Juan Franciso López Álvarez"
        correo="pancho2025@gmail.com"
      />
      <Mensaje
        titulo="Programación con Javascript"
        contenido="Si aprendes a crear proyectos con React no te vas a morir."
      />


    </>
  );
}

export default App;