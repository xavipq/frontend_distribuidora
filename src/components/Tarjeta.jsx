import React from 'react';
import { Col, Card, Badge, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Tarjeta = ({ nombre_producto, descripcion_producto, precio_unitario, stock, id_categoria, imagen }) => {
  const categorias = {
    1: "Herramientas",
    2: "Fijaciones",
    3: "Pinturas",
  };

  return (
    <Col lg={3} className="mt-3 mb-3">
      <Card border="light" bg="light">
        <Card.Img
          variant="top"
          src={imagen ? `data:image/png;base64,${imagen}` : '/placeholder-image.png'}
          alt={nombre_producto}
          loading="lazy"
        />
        <Card.Body>
          <Card.Title>
            <strong>{nombre_producto}</strong>
          </Card.Title>
          <Card.Text>{descripcion_producto || 'Sin descripción'}</Card.Text>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="primary" aria-label={`Precio: ${precio_unitario}`}>
              <i className="bi-currency-dollar"></i> {typeof precio_unitario === 'number' ? precio_unitario.toFixed(2) : '0.00'}
            </Badge>
            <Badge pill bg="secondary" aria-label={`Stock: ${stock}`}>
              <i className="bi-box"></i> Stock: {stock ?? 0}
            </Badge>
            <Badge pill bg="info" aria-label={`Categoría: ${categorias[id_categoria] || id_categoria}`}>
              <i className="bi-tag"></i> Categoría: {categorias[id_categoria] || id_categoria}
            </Badge>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
};

Tarjeta.propTypes = {
  nombre_producto: PropTypes.string.isRequired,
  descripcion_producto: PropTypes.string,
  precio_unitario: PropTypes.number,
  stock: PropTypes.number,
  id_categoria: PropTypes.number,
  imagen: PropTypes.string,
};

export default Tarjeta;