import config from "@/config"
import { signOut } from "next-auth/react";


const { keys } = config

export default function SideBar(
    { currentTab, setCurrentTab }: 
    { currentTab: DataString, setCurrentTab: React.Dispatch<React.SetStateAction<DataString>> }
) {
    return (
        <div className="w-1/5 xl:w-1/6 h-full flex-col py-12 xl:py-16 px-10 bg-blue-500 text-white rounded-xl hidden lg:flex">
            <div className="text-4xl font-bold flex gap-1 capitalize">
                Board.
            </div>
            {
                Object.keys(keys).map((data, index) => {
                    const Icon = keys[data as DataString];
                    const selected = currentTab === data;
                    const style = selected ? 
                        "font-bold" : 
                        "text-gray-50 font-thin";

                    return (
                        <div
                            className={`text-md flex mt-8 gap-1 capitalize cursor-pointer ${style}`}
                            key={data + index}
                            onClick={() => {
                                setCurrentTab(data as DataString);
                            }}
                        >
                            <span>
                                <Icon size={24} stroke={selected ? 2.5 : 1}/>
                            </span>
                            {data}
                        </div>
                    )
                }
                )
            }
            <div 
                className="text-md mt-auto cursor-pointer"
                onClick={() => signOut({ callbackUrl: "/" })}    
            >
                Sign Out
            </div>

        </div>
    )
}