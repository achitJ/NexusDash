import { useSession } from "next-auth/react";
import SearchBar from "./SearchBar";
import { IconBell } from "@tabler/icons-react";
import Image from "next/image";

export default function Header({ currentTab }: { currentTab: DataString }) {

    const { data: session } = useSession();
    const image = session?.user?.image;

    console.log(image);

    return (
        <div className="w-full h-8 flex mt-4 justify-between">
            <div className="text-2xl font-semibold capitalize">
                {currentTab}
            </div>
            <div className="flex gap-4 items-center">
                <SearchBar />
                <IconBell size={34} stroke={1.5} className="cursor-pointer"/>
                <Image
                    src={session?.user?.image!}
                    alt="Profile Picture"
                    width={34}
                    height={34}
                    className="rounded-full cursor-pointer"
                    referrerPolicy="no-referrer"
                />
            </div>
        </div>
    )
}
