import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = ({ bars }) => {
   const data = {
      labels: bars?.map((row) => row.labels),
      datasets: [
         {
            label: 'Nivel 1',
            data: bars.map((row) => row.level1),
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            stack: 'Stack 1',
            
         },
         {
            label: 'Nivel 2',
            data: bars.map((row) => row.level2),
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            stack: 'Stack 2',
         },
         {
            label: 'Nivel 3',
            data: bars.map((row) => row.level3),
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            stack: 'Stack 1',
         },
         {
            label: 'Nivel 4',
            data: bars.map((row) => row.level4),
            backgroundColor: 'rgba(255, 206, 86, 0.7)',
            stack: 'Stack 1',
            borderColor: [
               'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
         },
      ],
   };

   const series = [{
      name: 'series-1',
      data:[10,20,30,40]
   }]

   const options = {
      chart:{
         id: 'basic-bar '
      },
      plugins: {
         legend: {
            display: true,
         },
         datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: (value, context) => {
               const dataset = context.chart.data.datasets[context.datasetIndex];
               const stackIndex = dataset.stack;
               const total = dataset._stacks[stackIndex].total;
               const percentage = (value * 100) / total;
               return percentage.toFixed(2) + '%';
            },
         },
      },
      scales: {
         x: {
            stacked: true,
         },
         y: {
            stacked: true,
            ticks: {
               callback: (value) => value + '%',
            },
            beginAtZero: true,
         },
      },
   };

   return (
      <div>
         <Bar data={data} options={options} series={series}/>
      </div>
   );
};

export default BarChart;
