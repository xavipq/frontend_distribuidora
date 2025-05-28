import React, { useState, useEffect } from 'react';
import TablaUsuarios from '../components/usuarios/TablaUsuarios.jsx';
import ModalRegistroUsuario from '../components/usuarios/ModalRegistroUsuario.jsx';
import ModalEliminacionUsuario from '../components/usuarios/ModalEliminacionUsuario.jsx';
import ModalEdicionUsuario from '../components/usuarios/ModalActualizacionUsuario.jsx';
import CuadroBusquedas from '../components/busquedas/CuadroBusquedas.jsx';
import { Container, Button, Row, Col } from "react-bootstrap";

const Usuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    usuario: '',
    contraseña: ''
  });
  const [mostrarModalEliminacion, setMostrarModalEliminacion] = useState(false);
  const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [paginaActual, establecerPaginaActual] = useState(1);
  const elementosPorPagina = 3;
  const [usuarioEditado, setUsuarioEditado] = useState(null);
  const [mostrarModalEdicion, setMostrarModalEdicion] = useState(false);

  const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch('http://localhost:3000/api/usuarios');
      if (!respuesta.ok) {
        throw new Error('Error al cargar los usuarios');
      }
      const datos = await respuesta.json();
      setListaUsuarios(datos);
      setUsuariosFiltrados(datos);
      setCargando(false);
    } catch (error) {
      setErrorCarga(error.message);
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setNuevoUsuario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const manejarCambioInputEdicion = (e) => {
    const { name, value } = e.target;
    setUsuarioEditado(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const agregarUsuario = async () => {
    if (!nuevoUsuario.usuario || !nuevoUsuario.contraseña) {
      setErrorCarga("Por favor, completa todos los campos antes de guardar.");
      return;
    }

    try {
      const respuesta = await fetch('http://localhost:3000/api/registrarusuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!respuesta.ok) {
        throw new Error('Error al agregar el usuario');
      }

      await obtenerUsuarios();
      setNuevoUsuario({ usuario: '', contraseña: '' });
      setMostrarModal(false);
      setErrorCarga(null);
    } catch (error) {
      setErrorCarga(error.message);
    }
  };

  const manejarCambioBusqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    setTextoBusqueda(texto);
    establecerPaginaActual(1);

    const filtrados = listaUsuarios.filter(
      (usuario) =>
        usuario.usuario.toLowerCase().includes(texto) ||
        usuario.contraseña.toLowerCase().includes(texto)
    );
    setUsuariosFiltrados(filtrados);
  };

  const eliminarUsuario = async () => {
    if (!usuarioAEliminar) return;

    try {
      const respuesta = await fetch(`http://localhost:3000/api/eliminarusuario/${usuarioAEliminar.id_usuario}`, {
        method: 'DELETE',
      });

      if (!respuesta.ok) {
        throw new Error('Error al eliminar el usuario');
      }

      await obtenerUsuarios();
      setMostrarModalEliminacion(false);
      establecerPaginaActual(1);
      setUsuarioAEliminar(null);
      setErrorCarga(null);
    } catch (error) {
      setErrorCarga(error.message);
    }
  };

  const abrirModalEliminacion = (usuario) => {
    setUsuarioAEliminar(usuario);
    setMostrarModalEliminacion(true);
  };

  const abrirModalEdicion = (usuario) => {
    setUsuarioEditado(usuario);
    setMostrarModalEdicion(true);
  };

  const actualizarUsuario = async () => {
    if (!usuarioEditado?.usuario || !usuarioEditado?.contraseña) {
      setErrorCarga("Por favor, completa todos los campos antes de guardar.");
      return;
    }

    try {
      const respuesta = await fetch(`http://localhost:3000/api/actualizarusuario/${usuarioEditado.id_usuario}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario: usuarioEditado.usuario,
          contraseña: usuarioEditado.contraseña,
        }),
      });

      if (!respuesta.ok) {
        throw new Error('Error al actualizar el usuario');
      }

      await obtenerUsuarios();
      setMostrarModalEdicion(false);
      setUsuarioEditado(null);
      setErrorCarga(null);
    } catch (error) {
      setErrorCarga(error.message);
    }
  };

  const usuariosPaginados = usuariosFiltrados.slice(
    (paginaActual - 1) * elementosPorPagina,
    paginaActual * elementosPorPagina
  );

  return (
    <>
      <Container className="mt-5">
        <br />
        <h4>Usuarios</h4>

        <Row>
          <Col lg={2} md={4} sm={4} xs={5}>
            <Button variant="primary" onClick={() => setMostrarModal(true)} style={{ width: "100%" }}>
              Nuevo Usuario
            </Button>
          </Col>
          <Col lg={5} md={8} sm={8} xs={7}>
            <CuadroBusquedas
              textoBusqueda={textoBusqueda}
              manejarCambioBusqueda={manejarCambioBusqueda}
            />
          </Col>
        </Row>

        <br/><br/>

        <TablaUsuarios
          usuarios={usuariosPaginados}
          cargando={cargando}
          error={errorCarga}
          totalElementos={listaUsuarios.length}
          elementosPorPagina={elementosPorPagina}
          paginaActual={paginaActual}
          establecerPaginaActual={establecerPaginaActual}
          abrirModalEliminacion={abrirModalEliminacion}
          abrirModalEdicion={abrirModalEdicion}
        />

        <ModalRegistroUsuario
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          nuevoUsuario={nuevoUsuario}
          manejarCambioInput={manejarCambioInput}
          agregarUsuario={agregarUsuario}
          errorCarga={errorCarga}
        />

        <ModalEliminacionUsuario
          mostrarModalEliminacion={mostrarModalEliminacion}
          setMostrarModalEliminacion={setMostrarModalEliminacion}
          eliminarUsuario={eliminarUsuario}
        />

        <ModalEdicionUsuario
          mostrarModalEdicion={mostrarModalEdicion}
          setMostrarModalEdicion={setMostrarModalEdicion}
          usuarioEditado={usuarioEditado}
          manejarCambioInputEdicion={manejarCambioInputEdicion}
          actualizarUsuario={actualizarUsuario}
          errorCarga={errorCarga}
        />
      </Container>
    </>
  );
};

export default Usuarios;