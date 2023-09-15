import {
    Chart as ChartJS,
    CategoryScale,
    SubTitle,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    SubTitle,
);

export default function BarGraph({ activities }: { activities?: IActivities }) {

    const labels = activities?.guest.map((data, idx) => `Week${idx}`);
    const barSettings = {
        borderRadius: 8,
        borderSkipped: false,
        categoryPercentage: 0.4,
        barPercentage: 0.7,
    }

    const data = {
        labels,
        datasets: [
            {
                ...barSettings,
                label: 'Guest',
                data: activities?.guest,
                backgroundColor: '#ee8484',
            },
            {
                ...barSettings,
                label: 'User',
                data: activities?.user,
                backgroundColor: '#98d89e',
            }
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                align: 'end' as const,
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    boxHeight: 8,
                }
            },
            title: {
                display: true,
                align: 'start' as const,
                text: activities?.title,
                color: "black",
                font: {
                    size: 24,
                    weight: 'bold',
                }
            },
            subtitle: {
                display: true,
                align: 'start' as const,
                text: activities?.subtitles,
                font: {
                    size: 18,
                    weight: 'normal',
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    stepSize: 100
                },
                min: 0,
                max: 500,
            }
        }
    };

    return (
        <div className="w-full h-full bg-white rounded-xl shadow-md p-6">
            <Bar options={options} data={data} />
        </div>
    )
}