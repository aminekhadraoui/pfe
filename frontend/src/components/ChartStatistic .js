import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';

const ChartStatistic = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container>
        aaaaaaaaa
      <h2>Chart Statistics</h2>
      <Bar data={chartData} options={chartOptions} />
    </Container>
  );
};

export default ChartStatistic;
