'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md shadow-sm'
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
        {/* Logo */}
        <a
          href='#home'
          className='text-2xl font-bold font-poppins text-primary dark:text-primary-light'
        >
          Diwize
          <span className='text-gray-900 dark:text-gray-100'> Studio</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className='hidden md:flex space-x-8 font-poppins text-base'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className='text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors duration-300'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side buttons */}
        <div className='flex items-center space-x-4'>
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label='Toggle theme'
            className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition'
          >
            {theme === 'dark' ? (
              <Sun className='w-5 h-5 text-yellow-400' />
            ) : (
              <Moon className='w-5 h-5 text-gray-800' />
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className='md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className='w-5 h-5 text-gray-900 dark:text-gray-100' />
            ) : (
              <Menu className='w-5 h-5 text-gray-900 dark:text-gray-100' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='md:hidden bg-white dark:bg-[#0F0F0F] shadow-md px-6 py-4 space-y-3'
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className='block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors duration-300'
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  )
}
