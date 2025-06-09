<<<<<<< HEAD
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TablaCompras = ({ compras, cargando, error, obtenerDetalles, abrirModalEliminacion, abrirModalActualizacion }) => {
  if (cargando) return <div>Cargando compras...</div>;
  if (error) return <div>Error: {error}</div>;

=======
// Importaciones necesarias para el componente visual
import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TablaCompras = ({ compras, cargando, error }) => {
  if (cargando) {
    return <div>Cargando compras...</div>; // Muestra mensaje mientras carga
  }
  if (error) {
    return <div>Error: {error}</div>;     // Muestra error si ocurre
  }

  // Renderizado de la tabla con los datos recibidos
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID Compra</th>
<<<<<<< HEAD
          <th>Fecha Compra</th>
          <th>Empleado</th>
          <th>Total</th>
          <th>Acciones</th>
=======
          <th>ID Detalle Compra</th>
          <th>Fecha Compra</th>
          <th>Empleado</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Subtotal</th>
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
        </tr>
      </thead>
      <tbody>
        {compras.map((compra) => (
<<<<<<< HEAD
          <tr key={`${compra.id_compra}`}>
            <td>{compra.id_compra}</td>
            <td>{compra.fecha_compra}</td>
            <td>{compra.nombre_empleado}</td>
            <td>C$ {compra.total_compra}</td>
            <td>
              <Button
                variant="outline-success"
                size="sm"
                className="me-2"
                onClick={() => obtenerDetalles(compra.id_compra)}
              >
                <i className="bi bi-list-ul"></i>
              </Button>
              <Button
                variant="outline-warning"
                size="sm"
                className="me-2"
                onClick={() => abrirModalActualizacion(compra)}
              >
                <i className="bi bi-pencil"></i>
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => abrirModalEliminacion(compra)}
              >
                <i className="bi bi-trash"></i>
              </Button>
            </td>
=======
          <tr key={`${compra.id_compra}-${compra.id_detalle_compra}`}> {/* Clave única combinada */}
            <td>{compra.id_compra}</td>
            <td>{compra.id_detalle_compra}</td>
            <td>{compra.fecha_compra}</td>
            <td>{compra.nombre_empleado}</td>
            <td>{compra.nombre_producto}</td>
            <td>{compra.cantidad}</td>
            <td>C$ {compra.precio_unitario.toFixed(2)}</td>
            <td>C$ {compra.subtotal.toFixed(2)}</td>
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

<<<<<<< HEAD
export default TablaCompras;
=======
// Exportación del componente
export default TablaCompras;
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
