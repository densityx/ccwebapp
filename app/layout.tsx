import './globals.css'

import {Inter} from '@next/font/google'
import Header from "./Components/Header";

const inter = Inter({subsets: ['latin']})
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
        <head/>
        <body>
        <main>
            <Header/>
            
            <div className={'container mx-auto my-10'}>
                {children}
            </div>
        </main>
        </body>
        </html>
    )
}
