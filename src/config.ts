import { IconChartPie, IconTag, IconCalendarTime, IconUserCircle, IconSettings, TablerIconsProps } from "@tabler/icons-react";

export default {
    keys: {
        dashboard: IconChartPie,
        transactions: IconTag,
        schedules: IconCalendarTime,
        users: IconUserCircle,
        settings: IconSettings
    } as DataKeys,
    dummyData: {
        activities: {
            title: 'Activities',
            subtitles: 'May 21 - June 21',
            guest: [100, 200, 300, 400],
            user: [123, 234, 345, 456]
        } as IActivities,
        products: {
            title: 'Top Products',
            subtitles: 'May 21 - June 21',
            data: [55, 31, 14],
            labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies']
        } as IProducts,
    }
};