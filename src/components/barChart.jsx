"use client"

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const BarChart = () => {
  const [chartData, setChartData] = useState({ datasets : [] })

  const [chartOption, setChartOption] = useState({})

  useEffect(() => {
    setChartData({
      labels : ['Merah', 'Hitam', 'Kuning', 'Hijau'],
      datasets : [
        {
          label : 'Merah',
          data : [10],
          borderColor : ['rgb(0 0 0 )'],
          backgroundColor : ['rgba(185, 28, 28, 0.8)']
        },
        {
          label : 'Hitam',
          data : [12],
          borderColor : ['rgb(0 0 0 )'],
          backgroundColor : ['rgba(30, 41, 59, 0.8)']
        },
        {
          label : 'Kuning',
          data : [7],
          borderColor : ['rgb(0 0 0 )'],
          backgroundColor : ['rgba(250, 204, 21, 0.8)']
        },
        {
          label : 'Hijau',
          data : [20],
          borderColor : ['rgb(0 0 0 )'],
          backgroundColor : ['rgba(34,197,94, 0.8)']
        }
      ]
    })
    setChartOption({
      plugins : {
        legend : {
          position: 'top',
        },
        tittle : {
          display : true,
          text : "Statistik"
        }
      },
      maintainAspectRatio : false,
      responsive : true
    })
  }, [])
  

  return (
  <>
    <Bar data={chartData} options={chartOption} />
  </>
  )
};

export default BarChart;
