'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import avartar from '../../public/avartar01.jpg'

export default function HeroSection() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center pt-28 pb-12 px-4 md:px-10 overflow-hidden bg-white dark:bg-[#080808]'
    >
      {/* 🔮 Background Glow Orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] rounded-full' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-500/10 dark:bg-pink-600/10 blur-[120px] rounded-full' />
      </div>

      <div className='max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10'>
        {/* TEXT CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className='lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center p-8 md:p-14 rounded-[2.5rem] bg-gray-50/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-md shadow-sm'
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold mb-8 w-fit border border-purple-200 dark:border-purple-500/20'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-purple-500'></span>
            </span>
            Available for new projects
          </motion.div>

          <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05] text-gray-900 dark:text-white'>
            Crafting{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500 dark:from-purple-400 dark:to-pink-400'>
              Visual Magic
            </span>{' '}
            🎨
          </h1>

          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed'>
            I’m a creative designer specializing in stunning visuals, brand
            identity, and web experiences that leave lasting impressions.
          </p>

          <div className='flex flex-wrap gap-4'>
            {/* Primary Action - Resume */}
            <motion.a
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              href='https://docs.google.com/document/d/1LCajJ4ExGuLLnPEmzz-IY0lTP9Pz1Q5s2L8Y8R-IBk4/edit?tab=t.0'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-4 bg-purple-600/50 dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all shadow-xl shadow-black/10 dark:shadow-white/5 flex items-center justify-center'
            >
              View my Resume
            </motion.a>

            {/* Secondary Action - Contact */}
            <motion.a
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              href='https://wa.link/2rclc1'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-4 border border-black/10 dark:border-white/10 rounded-2xl font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all text-gray-900 dark:text-white flex items-center justify-center'
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.1,
          }}
          className='lg:col-span-5 order-1 lg:order-2 relative group min-h-[450px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-purple-600/5 to-fuchsia-600/5 border border-black/5 dark:border-white/10 flex items-center justify-center'
        >
          {/* Floating Avatar Container */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className='relative w-72 h-72 md:w-80 md:h-80 z-10'
          >
            <div className='absolute inset-0 bg-purple-600/20 blur-3xl rounded-full' />
            <Image
              src={avartar}
              alt='Diwize Studio Creative Designer'
              fill
              className='object-cover rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-2xl border-8 border-white dark:border-gray-900'
              priority
              sizes='(max-width: 768px) 288px, 320px'
            />
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className='absolute inset-0 pointer-events-none opacity-20 dark:opacity-40'
          >
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-dashed border-purple-500 rounded-full scale-110' />
          </motion.div>

          <motion.div
            animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute top-12 right-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 z-20'
          >
            <span className='text-2xl'>✨</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}