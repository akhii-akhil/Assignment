import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js'
import dum from './data.json'
Chartjs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)
function LineChart() {
    console.log(dum);
    let lab = []
    let da = []
    dum.map((i) => {
        lab.push(i.Year)
        da.push(i.Medals)
    })
    const data = {
        labels: lab,
        datasets: [{
            label: 'Medals Data',
            data: da,
            fill: true,
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua'
          
        }]
    };
    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Year",
                    color:"black"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Medals",
                    color:"black"
                }
            }
        },
        plugins: {
          title: {
            display: true,
            text: 'Medals Over the Years', // Chart title
          },
        },
      };
      
  return (
      <div>
          <Line
              data={data}
              options={options}
/>
    </div>
  )
}

export default LineChart