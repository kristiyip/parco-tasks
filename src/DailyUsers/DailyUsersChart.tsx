import { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Users } from './mockData';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function DailyUsersChart() {
  const [chartData, setChartData] = useState({
    labels: ['A month ago', '', 'Today'],
    datasets: [
      {
        label: 'label1',
        data: [12, 2, 3, 4],
        backgroundColor: 'red',
        barThickness: 6,
        minBarLength: 2,
      },
      {
        label: 'label2',
        data: [3, 4, 5, 6],
        backgroundColor: 'blue',
        barThickness: 6,
      },
      {
        label: 'label3',
        data: [3, 4, 5, 6],
        backgroundColor: 'green',
        barThickness: 6,
      },
    ]
  })

  const options = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function(val: any, index: any) {
            if(index === 0) {
              return 'A month ago'
            } else if(index === (Users.length - 1)) {
              return 'Today'
            } else {
              return ''
            }
          }
        },
      },
      y: {
        stacked: true
      }
    }
  }

  useEffect(() => {
    //Place fetch data function 
  }, [])

  return (
    <div>
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  )
}