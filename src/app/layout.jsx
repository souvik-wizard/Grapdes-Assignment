import { Inter } from 'next/font/google'
import './globals.css'
import MobileNav from '@/components/Navbar/MobileNav';
import Navbar from '@/components/Navbar/Navbar';
import Head from 'next/head'
import { Footer } from '@/components/Footer/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CampusTech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        <div>
          <MobileNav />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
