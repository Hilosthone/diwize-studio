'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import ServiceSection from './components/ServiceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingNav from './components/FloatingNav'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  // Prevents Hydration Mismatch & Runtime Errors
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <body className='opacity-0'>{children}</body>
  }

  return (
    <body className='bg-white text-gray-900 dark:bg-[#080808] dark:text-gray-100 transition-colors duration-500'>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ServiceSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingNav />
        {children}
      </ThemeProvider>
    </body>
  )
}
