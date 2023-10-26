"use client"

import { IconBrandApple, IconBrandGoogle } from "@tabler/icons-react"
import { AuthInput } from "../Input"
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Form() {
    // const { data: session } = useSession();

    // useEffect(() => {
    //     if (session) {
    //         window.location.href = "/dashboard"
    //     }
    // }, [session]);

    const [type, setType] = useState<"signin" | "register">("signin");

    return (
        <form className="w-full mt-10 flex flex-col gap-6">
            <div className="flex gap-4">
                {/* <div 
                    className="w-full flex justify-center gap-2 cursor-pointer bg-white rounded-lg py-3 px-4"
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                >
                    <IconBrandGoogle size={16} />
                    <div className="text-xs opacity-60">
                        Sign in with Google
                    </div>
                </div> */}

                <button
                    className="group w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    type="button"
                >
                    <div className="relative flex items-center space-x-4 justify-center">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="absolute left-0 w-5" alt="google logo"/>
                            <span
                                className="block w-max font-semibold tracking-wide text-gray-70 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                with Google
                            </span>
                    </div>
                </button>
            </div>
            {/* <div className="w-full p-8 bg-white rounded-lg">
                <AuthInput
                    label="Email"
                    placeholder="Enter your email"
                    disabled
                />
                <AuthInput
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                />
                <div className="text-sm text-blue-500 hover:underline cursor-pointer">
                    Forgot password?
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 w-full mt-3 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
            </div>
            <div className="text-sm text-gray-500 mx-auto">
                {"Don't have an account?"} <span className="text-blue-500 hover:underline cursor-pointer">Register Here</span>
            </div> */}
        </form>
    )
}