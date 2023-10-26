'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(!session) {
            router.push("/");
        } else {
            router.push("/dashboard");
        }
    }, [session]);

    return (
        <>
            {children}
        </>
    )
};