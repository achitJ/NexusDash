import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers'


const poppins = Poppins({
    subsets: ['latin-ext'],
    display: 'swap',
    weight: '400',
})

export const metadata: Metadata = {
    title: 'NexusDash',
    description: 'Modern Dashboard',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <NextAuthProvider>
                    {children}
                </NextAuthProvider>
            </body>
        </html>
    )
}
