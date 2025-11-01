import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export const metadata = {
  title: 'Diwize Studio',
  description: 'Creative design and web solutions by Diwize Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-background-light text-gray-900 dark:bg-background-dark dark:text-gray-100 transition-colors duration-500'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
          <Footer />
          {/* <main className='pt-20'>{children}</main> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
