import { getActivities, getProducts } from "@/api/chartData";
import Dashboard from "@/components/Dashboard";

export default async function DashboardPage() {
    const [
        activities,
        products
    ] = await Promise.all([
        getActivities(),
        getProducts()
    ]);

    return (
        <Dashboard activities={activities} products={products}/>
    )
}
