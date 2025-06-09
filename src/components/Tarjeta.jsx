import React from "react";
import { Col, Card, Badge, Stack } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";

const Tarjeta = ({ indice, nombre_producto, descripcion_producto, precio_unitario, stock, id_categoria, imagen }) => {
  return (
    <Col lg={3} className="mt-3">
      <Zoom cascade triggerOnce delay={10} duration={600}>
        <Card border="">
          <Card.Img
            variant="top"
            src={`data:image/png;base64,${imagen}`}
          />
          <Card.Body>
            <Card.Title>
              <strong>{nombre_producto}</strong>
            </Card.Title>
            <Card.Text>{descripcion_producto || 'Sin descripción'}</Card.Text>
            <Stack direction="horizontal" gap={2}>
              <Badge pill bg="primary">
                <i className="bi-currency-dollar"></i> {precio_unitario.toFixed(2)}
              </Badge>
              <Badge pill bg="secondary">
                <i className="bi-box"></i> Stock: {stock}
              </Badge>
              <Badge pill bg="info">
                <i className="bi-tag"></i> Categoría: {id_categoria}
              </Badge>
            </Stack>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
};

export default Tarjeta;