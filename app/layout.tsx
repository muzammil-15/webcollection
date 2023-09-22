import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WebCollect',
  description: 'Created by Lihaz Khan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bgcolor'>
        <Navbar/>
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
