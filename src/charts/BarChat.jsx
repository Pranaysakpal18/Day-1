
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Visitors',
      data: [100, 200, 150, 300, 250],
      backgroundColor: 'rgba(75, 192, 192, 0.5)'
    }]
  };

  return <Bar data={data} />;
};

export default BarChart;
