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
  const d = getDailyUserData(Users)
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        data: [],
        barThickness: 6,
        minBarLength: 2,
      }
    ]
  })
  return (
    <div style={{ position: 'relative' }}>
      <Bar
        data={chartData}
      />
    </div>
  )
}