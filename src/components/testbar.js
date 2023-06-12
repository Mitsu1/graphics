import React from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function BarChart({ bars }) {

    const data = {
        labels: bars.map(row => row.labels),
        datasets: [{
            label: 'Prueba de Gráfica',
            data: bars.map(row => row.count),
            backgroundColor: 'aqua',
            borderColor: 'blue',
            borderWidth: 1,
        }]
    }
    const options = {
        plugins: {
            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: (value) => value + '5%'
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <>
            <Bar data={data} options={options} plugins={[ChartDataLabels]} />
        </>
    )
}
