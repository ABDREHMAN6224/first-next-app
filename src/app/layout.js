import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { AppProvider } from '../../context/context'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AppProvider>
        </body>
    </html>
  )
}
