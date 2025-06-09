import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { Container, Image } from "react-bootstrap";
import Portada from "../assets/ferreteria.jpg";
import Proposito from "../components/Inicio/Proposito";
=======
import { Container } from "react-bootstrap";
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664

const Inicio = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const navegar = useNavigate();

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (!usuarioGuardado) {
      navegar("/");
    } else {
      setNombreUsuario(usuarioGuardado);
    }
  }, [navegar]);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("contraseña");
    navegar("/");
  };

<<<<<<< HEAD
return (
<Container>
<h1 className="text-center m-4">¡Bienvenido, {nombreUsuario}!</h1>
<Image src={Portada} fluid rounded/>
<Proposito />
</Container>
);
=======
  return (
    <Container>
      <h1>¡Bienvenido, {nombreUsuario}!</h1>
      <p>Estás en la página de inicio.</p>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </Container>
  );
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
};

export default Inicio;