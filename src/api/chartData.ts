import config from "@/config";

const { dummyData } = config;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export async function getActivities() {
    const url = process.env.NEXT_PUBLIC_ACTIVITY_API;

    try {
        if(!url) {
            throw new Error('No activity API URL defined');
        }

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const {range: {start, end}, guest, user} = await res.json();
        const from = new Date(start);
        const to = new Date(end);

        const formattedData: IActivities = {
            title: "Activities",
            subtitles: `${monthNames[from.getMonth()]} ${from.getFullYear() % 100} - ${monthNames[to.getMonth()]} ${to.getFullYear() % 100}`,
            guest: guest,
            user: user,
        }

        return formattedData;
    } catch (error) {
        if(error instanceof Error) {
            console.error(error.message);
        }

        return dummyData.activities;
    }
}

export async function getProducts() {
    const url = process.env.NEXT_PUBLIC_PRODUCT_API;

    try {
        if(!url) {
            throw new Error('No activity API URL defined');
        }

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const {range: {start, end}, labels} = await res.json();
        const from = new Date(start);
        const to = new Date(end);
        const data: number[] = [];
        const labelsValues: string[] = [];

        labels.forEach((label: {name: string, value: number}) => {
            data.push(label.value);
            labelsValues.push(label.name);
        });

        const formattedData: IProducts = {
            title: "Top Products",
            subtitles: `${monthNames[from.getMonth()]} ${from.getFullYear() % 100} - ${monthNames[to.getMonth()]} ${to.getFullYear() % 100}`,
            data,
            labels: labelsValues,
        }

        return formattedData;
    } catch (error) {
        if(error instanceof Error) {
            console.error(error.message);
        }

        return dummyData.products;
    }
}