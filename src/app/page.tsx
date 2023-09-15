import SignIn from "@/components/SignIn"
import { IconBrandDiscordFilled, IconBrandGithubFilled, IconBrandLinkedin, IconBrandTwitterFilled } from "@tabler/icons-react"

export default function Home() {
    const skewStyle = {
        transform: "skewX(-8deg) translateX(-20%) scaleX(1.2)"
    }

    return (
        <main className="w-full h-full flex bg-gray-100 -z-20">
            <div
                style={skewStyle} 
                className={`hidden lg:block absolute z-10 w-1/2 h-full bg-blue-500`}
            ></div>
            <div className="hidden lg:flex w-4/5 flex-col justify-between p-14 z-20">
                <div className="text-white text-2xl uppercase font-extrabold">
                    Logo
                </div>
                <div className="text-white text-6xl font-extrabold mx-auto">
                    Board.
                </div>
                <div className="mx-auto text-white flex gap-8">
                    <IconBrandGithubFilled size={42}/>
                    <IconBrandTwitterFilled size={42}/>
                    <IconBrandDiscordFilled size={42}/>
                    <IconBrandLinkedin size={42}/>
                </div>

            </div>
            <div className="w-full">
                <SignIn />
            </div>
        </main>
    )
}
