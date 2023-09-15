"use client"

import { IconBrandApple, IconBrandGoogle } from "@tabler/icons-react"
import { AuthInput } from "../Input"
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Form() {
    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            window.location.href = "/dashboard"
        }
    }, [session]);

    return (
        <form className="w-full mt-10 flex flex-col gap-6">
            <div className="flex gap-4">
                <div 
                    className="w-full flex justify-center gap-2 cursor-pointer bg-white rounded-lg py-3 px-4"
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                >
                    <IconBrandGoogle size={16} />
                    <div className="text-xs opacity-60">
                        Sign in with Google
                    </div>
                </div>
                <div className="w-full flex justify-center gap-2 cursor-pointer bg-white rounded-lg py-3 px-4">
                    <IconBrandApple size={16} />
                    <div className="text-xs opacity-60">
                        Sign in with Apple
                    </div>
                </div>
            </div>
            <div className="w-full p-8 bg-white rounded-lg">
                <AuthInput
                    label="Email"
                    placeholder="Enter your email"
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
            </div>
        </form>
    )
}