import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import {AppProvider} from "../../context/context"


export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <body className={inter.className} >
        <AppProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AppProvider>
        </body>
    </html>
  )
}
