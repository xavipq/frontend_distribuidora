import { Card } from 'react-bootstrap'; // Corrected import
import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const VentasPorMes = ({ meses, totales_por_mes }) => {
  const data = {
    labels: meses,
    datasets: [
      {
        label: 'Ventas por Mes',
        data: totales_por_mes,
         backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Ventas por Mes',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Ventas',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Meses',
        },
      },
    },
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Ventas por Mes</Card.Title>
        <div style={{ height: "300px", justifyContent: "center", alignItems: "center", display: "flex" }}>
        <Line data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default VentasPorMes;