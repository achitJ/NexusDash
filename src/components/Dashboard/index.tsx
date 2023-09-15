"use client"

import SideBar from "@/components/Sidebar";
import { useState } from "react";
import Header from "../Header";
import DataDisplay from "../Data";


export default function Dashboard(
    { activities, products }: { activities: IActivities, products: IProducts }
) {
    const [currentTab, setCurrentTab] = useState<DataString>("dashboard");
    const sideBarProps = { currentTab, setCurrentTab };
    const headerProps = { currentTab };
    const dataProps = { activities, products };

    return (
        <main className="w-full h-full lg:p-8 flex gap-14 bg-gray-100">
            <SideBar {...sideBarProps} />
            <div className="w-full flex flex-col gap-6">
                <Header {...headerProps} />
                <DataDisplay {...dataProps}/>
            </div>
        </main>
    )
}
