'use client'

import { motion } from 'framer-motion'
import {
  Instagram,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  ChevronUp,
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='relative overflow-hidden bg-white dark:bg-[#080808] text-gray-700 dark:text-gray-300 border-t border-black/5 dark:border-white/10 py-12 px-6 md:px-16'
    >
      {/* Subtle Background Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50' />

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10'>
        {/* LOGO / BRAND */}
        <div className='text-center md:text-left space-y-4'>
          <h3 className='text-2xl font-bold font-poppins'>
            <span className='text-purple-600 dark:text-purple-400'>Diwize</span>{' '}
            <span className='text-gray-900 dark:text-white'>Studio</span>
          </h3>
          <p className='text-sm leading-relaxed max-w-xs mx-auto md:mx-0'>
            Crafting visuals, brands, and digital experiences that leave a
            lasting impression. ✨
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className='text-center'>
          <h4 className='font-bold mb-6 text-gray-900 dark:text-white uppercase tracking-widest text-xs'>
            Navigation
          </h4>
          <ul className='space-y-3'>
            {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className='text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300'
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* SOCIALS & BACK TO TOP */}
        <div className='text-center md:text-right flex flex-col items-center md:items-end justify-between'>
          <div className='space-y-4'>
            <h4 className='font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs'>
              Let's Connect
            </h4>
            <div className='flex justify-center md:justify-end gap-3'>
              {[
                {
                  Icon: Facebook,
                  href: 'https://facebook.com/OlusegunSolomon',
                },
                { Icon: Twitter, href: 'https://x.com/diwizestudio' },
                { Icon: Instagram, href: 'https://instagram.com/diwizestudio' },
                {
                  Icon: Linkedin,
                  href: 'https://linkedin.com/company/diwizestudio',
                },
                { Icon: Github, href: 'https://github.com/diwizestudio' },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-xl bg-gray-100 dark:bg-white/[0.05] border border-black/5 dark:border-white/10 hover:bg-purple-600 hover:text-white transition-all duration-300'
                >
                  <Icon className='w-4 h-4' />
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className='mt-8 p-3 rounded-full border border-black/10 dark:border-white/10 hover:border-purple-500 text-gray-400 hover:text-purple-500 transition-all duration-300'
            aria-label='Back to top'
          >
            <ChevronUp className='w-5 h-5' />
          </button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className='max-w-7xl mx-auto border-t border-black/5 dark:border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400'>
        <p>© {new Date().getFullYear()} Diwize Studio. All rights reserved.</p>
        <p>
          Crafted with 💜 by{' '}
          <span className='font-semibold text-purple-600 dark:text-purple-400'>
            Hilosthone
          </span>
        </p>
      </div>
    </motion.footer>
  )
}
