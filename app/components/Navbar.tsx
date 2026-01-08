'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Copy,
  Check,
} from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
  { name: 'Services', href: '#services' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [copied, setCopied] = useState(false)

  // Initialize scroll tracking
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // 1. Handle Mounting to prevent hydration errors
  useEffect(() => {
    setMounted(true)
  }, [])

  // 2. Handle Scroll listeners
  useEffect(() => {
    if (!mounted) return
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  // 3. Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@diwize.studio')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // VERY IMPORTANT: Return null or a simplified loader until mounted
  // This prevents the "undefined" error during server-side rendering
  if (!mounted) return <div className='h-20 w-full' />

  return (
    <>
      <header className='fixed top-0 left-0 w-full z-[100] flex justify-center p-4 md:p-6 pointer-events-none'>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto relative overflow-hidden flex items-center justify-between
            w-full max-w-6xl px-6 py-3 rounded-[2rem] border transition-all duration-500
            ${
              scrolled
                ? 'bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-2xl border-purple-500/10 shadow-xl py-2'
                : 'bg-white/40 dark:bg-white/5 backdrop-blur-md border-transparent'
            }
          `}
        >
          {/* Progress Bar */}
          <motion.div
            className='absolute bottom-0 left-0 right-0 h-[2px] bg-purple-600 origin-left z-20'
            style={{ scaleX }}
          />

          {/* LOGO */}
          <div className='flex items-center gap-6 relative z-50'>
            <a
              href='#home'
              className='text-xl font-bold tracking-tighter flex items-center gap-2 group'
            >
              <div className='w-7 h-7 bg-purple-600 rounded-lg rotate-3 group-hover:rotate-12 transition-transform' />
              <span className='text-gray-900 dark:text-white'>
                DiwizeStudio
              </span>
            </a>
          </div>

          {/* DESKTOP NAV */}
          <div className='hidden md:flex items-center gap-6'>
            <ul className='flex items-center gap-1 bg-gray-100/50 dark:bg-white/[0.03] p-1 rounded-full border border-black/5 dark:border-white/10'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-all'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='p-2 text-gray-500 hover:text-purple-600 transition-colors'
            >
              {theme === 'dark' ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} className='text-purple-600' />
              )}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className='md:hidden relative z-[110] p-3 rounded-full bg-purple-600 text-white'
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </motion.nav>
      </header>

      {/* SIDEBAR DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <div className='fixed inset-0 z-[1000] md:hidden'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className='absolute inset-0 bg-black/60 backdrop-blur-md'
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#0A0A0A] shadow-2xl flex flex-col'
            >
              <button
                onClick={() => setMenuOpen(false)}
                className='absolute top-6 right-6 p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white'
              >
                <X size={24} />
              </button>

              <div className='flex-1 overflow-y-auto p-10 pt-24 space-y-12'>
                <div className='flex items-center gap-3'>
                  <span className='relative flex h-3 w-3'>
                    <span className='animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75'></span>
                    <span className='relative h-3 w-3 rounded-full bg-purple-600'></span>
                  </span>
                  <p className='text-xs font-bold uppercase tracking-[0.3em] text-purple-600'>
                    Open for work
                  </p>
                </div>

                <ul className='space-y-6'>
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className='group flex items-center justify-between text-4xl font-light tracking-tighter text-gray-900 dark:text-white hover:text-purple-600'
                      >
                        {link.name}{' '}
                        <ArrowRight
                          size={24}
                          className='opacity-0 group-hover:opacity-100 transition-all'
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className='p-10 bg-gray-50 dark:bg-white/[0.02] space-y-6'>
                <button
                  onClick={copyEmail}
                  className='flex items-center justify-between w-full p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5'
                >
                  <span className='text-xs font-medium truncate mr-2'>
                    {copied ? 'Copied!' : 'hello@diwize.studio'}
                  </span>
                  {copied ? (
                    <Check size={14} className='text-green-500' />
                  ) : (
                    <Copy size={14} className='text-purple-600' />
                  )}
                </button>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className='flex items-center gap-3 w-full p-5 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold'
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun size={20} /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon size={20} /> Dark Mode
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}