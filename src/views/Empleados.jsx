import React, { useState, useEffect } from 'react';
import TablaEmpleados from '../components/empleados/TablaEmpleados';
import ModalRegistroEmpleado from '../components/empleados/ModalRegistroEmpleado';
import ModalEliminacionEmpleado from '../components/empleados/ModalEliminacionEmpleado';
import ModalEdicionEmpleado from '../components/empleados/ModalEdicionEmpleado';
import CuadroBusquedas from '../components/busquedas/CuadroBusquedas';
import { Container, Button, Row, Col } from "react-bootstrap";

const Empleados = () => {
  const [listaEmpleados, setListaEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    celular: '',
    cargo: '',
    fecha_contratacion: ''
  });
  const [mostrarModalEliminacion, setMostrarModalEliminacion] = useState(false);
  const [empleadoAEliminar, setEmpleadoAEliminar] = useState(null);
  const [empleadosFiltrados, setEmpleadosFiltrados] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [paginaActual, establecerPaginaActual] = useState(1);
  const elementosPorPagina = 3;
  const [empleadoEditado, setEmpleadoEditado] = useState(null);
  const [mostrarModalEdicion, setMostrarModalEdicion] = useState(false);

  const obtenerEmpleados = async () => {
    try {
      const respuesta = await fetch('http://localhost:3000/api/empleados');
      if (!respuesta.ok) {
        throw new Error('Error al cargar los empleados');
      }
      const datos = await respuesta.json();
      setListaEmpleados(datos);
      setEmpleadosFiltrados(datos);
      setCargando(false);
    } catch (error) {
      setErrorCarga(error.message);
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setNuevoEmpleado(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const manejarCambioInputEdicion = (e) => {
    const { name, value } = e.target;
    setEmpleadoEditado(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const agregarEmpleado = async () => {
    if (!nuevoEmpleado.primer_nombre || !nuevoEmpleado.primer_apellido || 
        !nuevoEmpleado.celular || !nuevoEmpleado.cargo || !nuevoEmpleado.fecha_contratacion) {
      setErrorCarga("Por favor, completa todos los campos obligatorios antes de guardar.");
      return;
    }

    try {
      const respuesta = await fetch('http://localhost:3000/api/registrarempleado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoEmpleado),
      });

      if (!respuesta.ok) {
        throw new Error('Error al agregar el empleado');
      }

      await obtenerEmpleados();
      setNuevoEmpleado({
        primer_nombre: '',
        segundo_nombre: '',
        primer_apellido: '',
        segundo_apellido: '',
        celular: '',
        cargo: '',
        fecha_contratacion: ''
      });
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
    
    const filtrados = listaEmpleados.filter(
      (empleado) =>
        empleado.primer_nombre.toLowerCase().includes(texto) ||
        (empleado.segundo_nombre && empleado.segundo_nombre.toLowerCase().includes(texto)) ||
        empleado.primer_apellido.toLowerCase().includes(texto) ||
        (empleado.segundo_apellido && empleado.segundo_apellido.toLowerCase().includes(texto)) ||
        empleado.celular.toLowerCase().includes(texto) ||
        empleado.cargo.toLowerCase().includes(texto) ||
        empleado.fecha_contratacion.toLowerCase().includes(texto)
    );
    setEmpleadosFiltrados(filtrados);
  };

  const eliminarEmpleado = async () => {
    if (!empleadoAEliminar) return;

    try {
      const respuesta = await fetch(`http://localhost:3000/api/eliminarempleado/${empleadoAEliminar.id_empleado}`, {
        method: 'DELETE',
      });

      if (!respuesta.ok) {
        throw new Error('Error al eliminar el empleado');
      }

      await obtenerEmpleados();
      setMostrarModalEliminacion(false);
      establecerPaginaActual(1);
      setEmpleadoAEliminar(null);
      setErrorCarga(null);
    } catch (error) {
      setErrorCarga(error.message);
    }
  };

  const abrirModalEliminacion = (empleado) => {
    setEmpleadoAEliminar(empleado);
    setMostrarModalEliminacion(true);
  };

  const abrirModalEdicion = (empleado) => {
    setEmpleadoEditado(empleado);
    setMostrarModalEdicion(true);
  };

  const actualizarEmpleado = async () => {
    if (!empleadoEditado?.primer_nombre || !empleadoEditado?.primer_apellido || 
        !empleadoEditado?.celular || !empleadoEditado?.cargo || !empleadoEditado?.fecha_contratacion) {
      setErrorCarga("Por favor, completa todos los campos obligatorios antes de guardar.");
      return;
    }

    try {
      const respuesta = await fetch(`http://localhost:3000/api/actualizarempleado/${empleadoEditado.id_empleado}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empleadoEditado),
      });

      if (!respuesta.ok) {
        throw new Error('Error al actualizar el empleado');
      }

      await obtenerEmpleados();
      setMostrarModalEdicion(false);
      setEmpleadoEditado(null);
      setErrorCarga(null);
    } catch (error) {
      setErrorCarga(error.message);
    }
  };

  const empleadosPaginados = empleadosFiltrados.slice(
    (paginaActual - 1) * elementosPorPagina,
    paginaActual * elementosPorPagina
  );

  return (
    <>
      <Container className="mt-5">
        <br />
        <h4>Empleados</h4>

        <Row>
          <Col lg={2} md={4} sm={4} xs={5}>
            <Button variant="primary" onClick={() => setMostrarModal(true)} style={{ width: "100%" }}>
              Nuevo Empleado
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

        <TablaEmpleados 
          empleados={empleadosPaginados} 
          cargando={cargando} 
          error={errorCarga}
          totalElementos={empleadosFiltrados.length}
          elementosPorPagina={elementosPorPagina}
          paginaActual={paginaActual}
          establecerPaginaActual={establecerPaginaActual}
          abrirModalEliminacion={abrirModalEliminacion}
          abrirModalEdicion={abrirModalEdicion}
        />
        <ModalRegistroEmpleado
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          nuevoEmpleado={nuevoEmpleado}
          manejarCambioInput={manejarCambioInput}
          agregarEmpleado={agregarEmpleado}
          errorCarga={errorCarga}
        />
        <ModalEliminacionEmpleado
          mostrarModalEliminacion={mostrarModalEliminacion}
          setMostrarModalEliminacion={setMostrarModalEliminacion}
          eliminarEmpleado={eliminarEmpleado}
        />
        <ModalEdicionEmpleado
          mostrarModalEdicion={mostrarModalEdicion}
          setMostrarModalEdicion={setMostrarModalEdicion}
          empleadoEditado={empleadoEditado}
          manejarCambioInputEdicion={manejarCambioInputEdicion}
          actualizarEmpleado={actualizarEmpleado}
          errorCarga={errorCarga}
        />
      </Container>
    </>
  );
};

export default Empleados;