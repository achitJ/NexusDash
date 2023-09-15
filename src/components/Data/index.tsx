import Analytics from "./Analytics"
import BarGraph from "./BarGraph"
import DoughnutChart from "./Doughnut"
import Profile from "./Profile"

export default function DataDisplay(
    { activities, products }: { activities: IActivities, products: IProducts }
) {

    const gridContainer = {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.2fr 2fr 1.6fr",
    }

    return (
        <div style={gridContainer} className="h-full gap-6 flex flex-col lg:grid">
            <Analytics />
            <BarGraph activities={activities}/>
            <div className="w-full h-full flex flex-col lg:flex-row gap-6">
                <DoughnutChart products={products}/>
                <Profile />
            </div>
        </div>
    )
}