import { useCallback, useEffect, useRef, useState } from 'react'
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
import { toFont } from 'chart.js/helpers';
import { getStackedBarChartLabels } from './helper';
import CustomTooltip from './CustomTooltip';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function DailyUsersChart() {
  const labels = getStackedBarChartLabels()
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: 'label1',
        data: [12, 2, 3, 4, 12, 2, 3, 4],
        backgroundColor: 'red',
        barThickness: 6,
        minBarLength: 2,
      },
      {
        label: 'label2',
        data: [3, 4, 5, 6, 3, 4, 5, 6],
        backgroundColor: 'blue',
        barThickness: 6,
      },
      {
        label: 'label3',
        data: [7, 4, 5, 6, 3, 4, 5, 6],
        backgroundColor: 'green',
        barThickness: 6,
      },
    ]
  })


  // Utility function to create or get the custom tooltip element
  const getOrCreateTooltip = (chart: any) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('.custom-tooltip');

    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'custom-tooltip';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.background = 'rgba(255, 255, 255, 0.9)';
      tooltipEl.style.border = '1px solid #ccc';
      tooltipEl.style.borderRadius = '5px';
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.transition = 'all 0.1s ease';
      tooltipEl.style.padding = '5px';
      chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
  }

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
        external: (context: any) => {
          // Get tooltip element
          const tooltipEl = getOrCreateTooltip(context.chart);

          // Hide if no data is available
          if (context.tooltip.opacity === 0) {
            tooltipEl.style.opacity = '0';
            return;
          }

          console.log(context)

          // Set text and styles for the custom tooltip
          if (context.tooltip.body) {
            const titleLines = context.tooltip.title || [];
            const bodyLines = context.tooltip.body.map((b: any) => b.lines);
        
            let innerHtml = `<div style="padding: 10px;">`;

            // Add title
            titleLines.forEach((title: any) => {
              innerHtml += `<div style="font-weight: bold; margin-bottom: 5px;">${title}</div>`;
            });
      
            // Add body
            bodyLines.forEach((body: any, i: any) => {
              const datasetLabel = context.tooltip.dataPoints[i].dataset.label;
              const color = context.tooltip.dataPoints[i].dataset.backgroundColor;
              const parsedStackData = context.tooltip.dataPoints[i].parsed._stacks.y
              innerHtml += `
                <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 5px;">
                  <div style="width: 12px; height: 12px; background-color: ${color}; margin-right: 5px;"></div>
                  <div>${parsedStackData[0]}</div>
                  <div>${parsedStackData[1]}</div>
                  <div>${parsedStackData[2]}</div>
                </div>
              `;
            });

            innerHtml += `</div>`;

            tooltipEl.innerHTML = innerHtml;
          }

          // Position and display the tooltip
          const { offsetLeft: positionX, offsetTop: positionY } = context.chart.canvas;
          tooltipEl.style.opacity = '1';
          tooltipEl.style.left = positionX + context.tooltip.caretX + 'px';
          tooltipEl.style.top = positionY + context.tooltip.caretY + 'px';
        },
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: function(val: any, index: any) {
            if(index === 0) {
              return labels[0]
            } else if(index === (labels.length - 1)) {
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
    <div style={{
      position: 'relative'
    }}>
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  )
}