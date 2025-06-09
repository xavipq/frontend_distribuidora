import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import VentasPorMes from '../components/graficos/VentasPorMes';
import VentasPorEmpleado from '../components/graficos/VentasPorEmpleado';
import ChatIA from '../components/ChatIA';

const Estadisticas = () => {
  const [meses, setMeses] = useState([]);
  const [totalesPorMes, setTotalesPorMes] = useState([]);

  const [empleados, setEmpleados] = useState([]);
  const [total_ventas, setTotalVentas] = useState([]);

  const [mostrarChatModal, setMostrarChatModal] = useState(false); // Estado para el modal

 
    const cargaVentas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/totalVentasPorMes');
        const data = await response.json();
        setMeses(data.map(item => item.mes));
        setTotalesPorMes(data.map(item => item.total_ventas));
      } catch (error) {
        console.error('Error al cargar ventas:', error);
        alert('Error al cargar ventas: ' + error.message);
      }
    };
    
  const cargaVentasPorEmpleado = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/ventasporempleado');
    const data = await response.json();
    setEmpleados(data.map(item => item.primer_nombre + " "+ item.primer_apellido));
    setTotalVentas(data.map(item => item.total_ventas));
  } catch (error) {
    console.error('Error al cargar ventas por empleado:', error);
    alert('Error al cargar ventas por empleado: ' + error.message);
  }
};

useEffect(() => {
  cargaVentas();
  cargaVentasPorEmpleado();
}, []);



  return (
    <Container className="mt-5">
      <h4>Estadísticas</h4>
      <Button 
          variant="primary" 
          className="mb-4"
          onClick={() => setMostrarChatModal(true)}
        >
          Consultar con IA
        </Button>
      <Row className="mt-4">
        <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
          <VentasPorMes meses={meses} totales_por_mes={totalesPorMes} />
          <Col xs={12} sm={12} md={12} lg={6} className="mb-4">
          <VentasPorEmpleado empleados={empleados} total_ventas={total_ventas} />
          <ChatIA mostrarChatModal={mostrarChatModal} setMostrarChatModal={setMostrarChatModal} />
         </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Estadisticas;