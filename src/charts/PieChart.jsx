// components/charts/PieChart.jsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [{
      label: 'Device Usage',
      data: [60, 30, 10],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
    }]
  };

  return <Pie data={data} />;
};

export default PieChart;
