import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function DoughnutChart(
    { products }: { products: IProducts }
) {

    const data = {
        labels: products.labels,
        datasets: [
            {
                label: 'Products',
                data: products.data,
                backgroundColor: [
                    '#98d89e',
                    '#f6dc7d',
                    '#ee8484',
                ],
                borderColor: [
                    '#98d89e',
                    '#f6dc7d',
                    '#ee8484',
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 80,
        plugins: {
            legend: {
                position: 'right' as const,
                align: 'center' as const,
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    boxHeight: 8,
                    color: "black",
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    generateLabels: (chart: any) => {
                        const datasets = chart.data.datasets;
                        return datasets[0].data.map((data: any, i: number) => ({
                            text: [chart.data.labels[i],`${data}%`],
                            fillStyle: datasets[0].backgroundColor[i],
                            strokeStyle: datasets[0].backgroundColor[i],
                            index: i,
                        }))
                    }

                },
            },
            title: {
                display: true,
                align: 'start' as const,
                text: products.title,
                color: "black",
                font: {
                    size: 20,
                    weight: 'bold',
                }
            },
            subtitle: {
                display: true,
                align: 'end' as const,
                text: products.subtitles,
                padding: -30,
                font: {
                    size: 16,
                    weight: 'normal',
                }
            }
        }
    };

    return (
        <div className="w-full h-full flex justify-center bg-white rounded-xl shadow-md p-4">
            <div className='w-full xl:w-3/4 2xl:w-2/3'>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}