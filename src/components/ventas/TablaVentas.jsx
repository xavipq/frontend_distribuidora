// Importaciones necesarias para el componente visual
import React from 'react';
<<<<<<< HEAD
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TablaVentas = ({ ventas, cargando, error, obtenerDetalles, abrirModalEliminacion, abrirModalActualizacion}) => {
=======
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TablaVentas = ({ ventas, cargando, error }) => {
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
  if (cargando) {
    return <div>Cargando ventas...</div>; // Muestra mensaje mientras carga
  }
  if (error) {
    return <div>Error: {error}</div>;     // Muestra error si ocurre
  }

  // Renderizado de la tabla con los datos recibidos
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID Venta</th>
<<<<<<< HEAD
          <th>Fecha Venta</th>
          <th>Cliente</th>
          <th>Empleado</th>
          <th>Total</th>
          <th>Acciones</th>
=======
          <th>ID Detalle</th>
          <th>Fecha Venta</th>
          <th>Cliente</th>
          <th>Empleado</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Subtotal</th>
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
        </tr>
      </thead>
      <tbody>
        {ventas.map((venta) => (
<<<<<<< HEAD
          <tr key={`${venta.id_venta}`}>
            <td>{venta.id_venta}</td>
            <td>{venta.fecha_venta}</td>
            <td>{venta.nombre_cliente}</td>
            <td>{venta.nombre_empleado}</td>
            <td>C$ {venta.total_venta.toFixed(2)}</td>
            <td >
          <Button
            variant="outline-success"
            size="sm"
            className="me-2"
            onClick={() => obtenerDetalles(venta.id_venta)}
          >
            <i className="bi bi-list-ul"></i>
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
              className="me-2"
            onClick={() => abrirModalEliminacion(venta)}
          >
            <i className="bi bi-trash"></i>
          </Button>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => abrirModalActualizacion(venta)}
          >
            <i className="bi bi-pencil"></i>
          </Button>
        </td>
=======
          <tr key={`${venta.id_venta}-${venta.id_detalle_venta}`}> {/* Clave única combinada */}
            <td>{venta.id_venta}</td>
            <td>{venta.id_detalle_venta}</td>
            <td>{venta.fecha_venta}</td>
            <td>{venta.nombre_cliente}</td>
            <td>{venta.nombre_empleado}</td>
            <td>{venta.nombre_producto}</td>
            <td>{venta.cantidad}</td>
            <td>C$ {venta.precio_unitario.toFixed(2)}</td>
            <td>C$ {venta.subtotal.toFixed(2)}</td>
>>>>>>> 8b9b42bca9c9c56d64c27c621bb09e6d9808a664
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Exportación del componente
export default TablaVentas;