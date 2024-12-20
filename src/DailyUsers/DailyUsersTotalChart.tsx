import { useState } from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { getDailyUserData, getStackedBarChartLabels } from "./helper";
import { Users } from './mockData';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function DailyUsersTotalChart() {
  const labels = getStackedBarChartLabels()
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        data: getDailyUserData(Users),
        backgroundColor: '#60BE6499',
        barThickness: 6,
        minBarLength: 2,
      }
    ]
  })

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        border: {
          dash: [5, 5],
          display: true
        },
        grid: {
           drawTicks: false,
           display: true
        }
      }
    }
  }
  return (
    <div style={{ position: 'relative' }}>
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  )
}