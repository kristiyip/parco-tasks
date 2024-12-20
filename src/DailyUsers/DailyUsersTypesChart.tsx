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
import { getOneMonthAgoUnformatted, getStackedBarChartLabels } from './helper';
import moment from "moment"
import CustomTooltip from './CustomTooltip';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function DailyUsersTypesChart() {
  const labels = getStackedBarChartLabels()
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: 'label1',
        data: [12, 2, 3, 4, 12, 2, 3, 4],
        backgroundColor: '#FD5C70',
        barThickness: 6,
        minBarLength: 2,
      },
      {
        label: 'label2',
        data: [3, 4, 5, 6, 3, 4, 5, 6],
        backgroundColor: '#60BE644D',
        barThickness: 6,
      },
      {
        label: 'label3',
        data: [7, 4, 5, 6, 3, 4, 5, 6],
        backgroundColor: '#60BE6499',
        barThickness: 6,
      },
      {
        label: 'label4',
        data: [7, 4, 5, 6, 3, 4, 5, 6],
        backgroundColor: '#60BE64',
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
      legend: {
        display: false
      },
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

          // Set text and styles for the custom tooltip
          if (context.tooltip.body) {
            const dateOneMonthAgo = getOneMonthAgoUnformatted()
            const dateOfData = dateOneMonthAgo.add(context.tooltip.dataPoints[0].dataIndex, 'days')

            console.log(dateOfData)
            
            const titleLines = context.tooltip.title || [];
            const bodyLines = context.tooltip.body.map((b: any) => b.lines);
        
            let innerHtml = `<div style="padding: 24px 20px; width: 200px">`;

            // // Add title
            innerHtml += `
              <div style="font-weight: bold; margin-bottom: 12px;">
                ${dateOfData.format('ll').replace(/,\s*\d{4}/, '')}
              </div>
            `;
            
      
            // Add body
            bodyLines.forEach((body: any, i: any) => {
              const parsedStackData = context.tooltip.dataPoints[i].parsed._stacks.y
              innerHtml += `
                <div style="display: flex; flex-direction: column; gap: 12px; align-items: center; margin-bottom: 5px;">
                  <div style="display: flex; width: 100%; justify-content: space-between;">
                    <div style="display: flex;">
                      <div style="width: 12px; height: 12px; background-color: #60BE64; margin-right: 5px; margin-top: 4px"<div></div>
                      <div>URGENT Actionable</div>
                    </div>
                    <div>${parsedStackData[3]}</div>
                  </div>
                  <div style="display: flex; width: 100%; justify-content: space-between;">
                    <div style="display: flex;">
                      <div style="width: 12px; height: 12px; background-color: #60BE6499; margin-right: 5px; margin-top: 4px"></div>
                      <div>Likely Actionable</div>
                    </div>
                    <div>${parsedStackData[2]}</div>
                  </div>
                  <div style="display: flex; width: 100%; justify-content: space-between;">
                    <div style="display: flex;">
                      <div style="width: 12px; height: 12px; background-color: #60BE644D; margin-right: 5px; margin-top: 4px"></div>
                      <div>Unlikely Actionable</div>
                    </div>
                    <div>${parsedStackData[1]}</div> 
                  </div>
                  <div style="display: flex; width: 100%; justify-content: space-between;">
                    <div style="display: flex;">
                      <div style="width: 12px; height: 12px; background-color: #FD5C70; margin-right: 5px; margin-top: 4px"></div>
                      <div>Not Actionable</div>
                    </div>
                    <div>${parsedStackData[0]}</div>
                  </div>
                  <div style="display: flex; width: 100%; justify-content: space-between;">
                    <div>Total</div>
                    <div>${parsedStackData[0] + parsedStackData[1] + parsedStackData[2] + parsedStackData[3]}</div>
                  </div>
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
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
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