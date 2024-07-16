import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ScriptableContext
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => { 
  const chartRef = useRef(null);

  const data = {
    labels: ['AUG', 'OCT', 'DEC', 'FEB', 'APR', 'MAY'],
    datasets: [
      {
        label: 'Weight',
        // data: [ ],
        data: [ 100,90,85,70,65,60],
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        tension: 0.4, // For smooth curves
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'green');
          gradient.addColorStop(0.5, 'yellow');
          gradient.addColorStop(1, 'red');

          return gradient;
        },
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataIndex === context.dataset.data.length - 1) {
              return `Goal: ${context.raw} kg`;
            }
            return `${context.raw} kg`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: false,
      },
      y: {
        beginAtZero: false,
        min: 60,
        max: 100,
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineChart;
