import SearchBar from "./SearchBar";
import { IconBell } from "@tabler/icons-react";

export default function Header({ currentTab }: { currentTab: DataString }) {

    return (
        <div className="w-full h-8 flex mt-4 justify-between">
            <div className="text-2xl font-semibold capitalize">
                {currentTab}
            </div>
            <div className="flex gap-4 items-center">
                <SearchBar />
                <IconBell size={34} stroke={1.5} className="cursor-pointer"/>
            </div>
        </div>
    )
}
