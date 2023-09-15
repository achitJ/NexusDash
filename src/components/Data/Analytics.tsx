import { IconCash, IconTag, IconThumbUp, IconUsers, TablerIconsProps } from "@tabler/icons-react"

function AnalyticsCard(props: AnalyticsData) {
    const { name, value, tag, icon: Icon, color } = props;

    return (
        <div className="bg-white rounded-xl shadow-md w-full p-4">
            <div className={`border p-2 w-fit rounded-full text-white opacity-50 mb-2 ${color}`}>
                <Icon size={24}/>
            </div>
            {name}
            <div className="flex justify-between mt-2">
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                    {tag}
                </div>
            </div>
        </div>
    )
};

export default function Analytics() {
    const data: AnalyticsData[] = [
        {
            name: "Total Revenues",
            value: "$2,129,430",
            tag: "+2.5%",
            icon: IconCash,
            color: "bg-green-600"
        },
        {
            name: "Total Transactions",
            value: "1,520",
            tag: "+1.7%",
            icon: IconTag,
            color: "bg-yellow-600"
        },
        {
            name: "Total Likes",
            value: "9,721",
            tag: "+1.4%",
            icon: IconThumbUp,
            color: "bg-red-600"
        },
        {
            name: "Total Users",
            value: "9,721",
            tag: "+4.2%",
            icon: IconUsers,
            color: "bg-blue-600"
        },
    ];

    return (
        <div className="w-full h-full flex flex-wrap justify-between gap-6 lg:flex-nowrap">
        {
            data.map((item, index) => (
                <AnalyticsCard 
                    key={item.name + index} 
                    {...item}
                />
            ))
        }
        </div>
    );
}