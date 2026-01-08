'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Home, User, Briefcase, Cpu, Mail, Sun, Moon } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
  { name: 'Services', href: '#services', icon: Cpu },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function FloatingNav() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [active, setActive] = useState('Home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          exit={{ y: 100, x: '-50%', opacity: 0 }}
          className='fixed bottom-6 left-1/2 z-[100] flex items-center gap-1 p-2 rounded-full bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-2xl shadow-purple-500/20'
        >
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.name

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className='relative p-3 transition-all duration-300 group'
              >
                {isActive && (
                  <motion.div
                    layoutId='nav-glow'
                    className='absolute inset-0 rounded-full bg-purple-600/10 dark:bg-purple-400/20'
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon
                  size={20}
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400 scale-110'
                      : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
                />
              </a>
            )
          })}

          {/* Vertical Divider */}
          <div className='w-[1px] h-6 bg-black/10 dark:bg-white/10 mx-1' />

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='p-3 rounded-full text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
            aria-label='Toggle Theme'
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}