import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const VentasPorMes = ({ meses, totales_por_mes }) => {
  // Paso 4: Crear referencia del gráfico
  const chartRef = useRef(null);

  // Datos del gráfico
  const data = {
    labels: meses,
    datasets: [
      {
        label: 'Ventas por Mes',
        data: totales_por_mes,
        backgroundColor: 'rgba(180, 7, 117, 0.85)',
        borderColor: 'rgb(245, 106, 224)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Ventas por Mes' },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Total Ventas' },
      },
      x: {
        title: { display: true, text: 'Meses' },
      },
    },
  };

  // Paso 6: Método para generar el reporte PDF
  const generarPDF = () => {
    const doc = new jsPDF();

    // Encabezado
    doc.setFillColor(28, 41, 51); // color de fondo
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 30, "F");
    doc.setTextColor(255, 255, 255); // texto blanco
    doc.setFontSize(22);
    doc.text("Reporte de Ventas por Mes", doc.internal.pageSize.getWidth() / 2, 20, { align: "center" });

    // Captura de imagen del gráfico
    const chartInstance = chartRef.current;
    const chartCanvas = chartInstance?.canvas;
    const chartImage = chartCanvas?.toDataURL("image/png", 1.0);

    if (chartImage) {
      doc.addImage(chartImage, "PNG", 14, 40, 180, 100);
    }

    // Tabla con los datos
    const columnas = ["Mes", "Ventas (C$)"];
    const filas = meses.map((mes, index) => [mes, totales_por_mes[index]]);

    autoTable(doc, {
      head: [columnas],
      body: filas,
      startY: 150,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 2 },
      margin: { top: 20, left: 14, right: 14 },
    });

    // Paso extra: nombre dinámico del archivo
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mesActual = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const nombreArchivo = `VentasPorMes_${dia}${mesActual}${anio}.pdf`;

    // Guardar PDF
    doc.save(nombreArchivo);
  };

  // Paso 7: Retornar vista
  return (
    <Card>
      <Card.Body>
        <Card.Title>Ventas por Mes</Card.Title>

        <div
          style={{
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          {/* Paso 5: Asignar ref al gráfico */}
          <Line ref={chartRef} data={data} options={options} />
        </div>

        {/* Botón para generar el PDF */}
        <Button className="btn btn-primary mt-3" onClick={generarPDF}>
          Generar Reporte <i className="bi bi-download"></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VentasPorMes;
