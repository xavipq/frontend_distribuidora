// Importaciones necesarias para el componente visual
import React from 'react';
<<<<<<< HEAD
import Paginacion from '../ordenamiento/Paginacion';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Declaración del componente TablaCategorias que recibe props
const TablaCategorias = ({
   categorias, 
  cargando,
   error,
   totalElementos,
  elementosPorPagina,
  paginaActual,
  establecerPaginaActual,
  abrirModalEliminacion,
  abrirModalEdicion
   }) => {
=======
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Declaración del componente TablaCategorias que recibe props
const TablaCategorias = ({ categorias, cargando, error }) => {
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
  // Renderizado condicional según el estado recibido por props
  if (cargando) {
    return <div>Cargando categorías...</div>; // Muestra mensaje mientras carga
  }
  if (error) {
    return <div>Error: {error}</div>;         // Muestra error si ocurre
  }

  // Renderizado de la tabla con los datos recibidos
  return (
<<<<<<< HEAD
    <>
=======
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID Categoría</th>
          <th>Nombre</th>
          <th>Descripción</th>
<<<<<<< HEAD
          <th>Acciones</th>
=======
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria) => (
          <tr key={categoria.id_categoria}>
            <td>{categoria.id_categoria}</td>
            <td>{categoria.nombre_categoria}</td>
            <td>{categoria.descripcion_categoria}</td>
<<<<<<< HEAD

            <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="me-2"
                  onClick={() => abrirModalEliminacion(categoria)}
                >
                  <i className="bi bi-trash"></i>
                </Button>
              

              <Button
                  variant="outline-warning"
                  size="sm"
                  
                  onClick={() => abrirModalEdicion(categoria)}
                >
                  <i className="bi bi-pencil"></i>
                </Button>
                </td>
=======
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
          </tr>
        ))}
      </tbody>
    </Table>
<<<<<<< HEAD
    <Paginacion
  elementosPorPagina={elementosPorPagina}
  totalElementos={totalElementos}
  paginaActual={paginaActual}
  establecerPaginaActual={establecerPaginaActual}
/>
    </>

=======
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
  );
};

// Exportación del componente
export default TablaCategorias;