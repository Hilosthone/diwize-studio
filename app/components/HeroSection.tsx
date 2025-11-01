'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import avartar from '../../public/avartar.png'

export default function HeroSection() {
  return (
    <section
      id='home'
      className='relative overflow-hidden min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 py-24 px-6 md:px-16 bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-500'
    >
      {/* 🌈 Animated Gradient Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className='absolute inset-0 -z-10'
      >
        <div className='absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-40 bg-gradient-to-r from-primary via-purple-400 to-indigo-500 dark:from-primary-light dark:via-purple-500 dark:to-pink-500 animate-pulse' />
      </motion.div>

      {/* LEFT TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='text-center md:text-left max-w-lg z-10'
      >
        <h1 className='text-4xl md:text-6xl font-bold font-poppins text-primary mb-4'>
          Crafting Visual Magic 🎨
        </h1>
        <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6'>
          I’m a creative designer specializing in stunning visuals, brand
          identity, and web experiences that leave lasting impressions.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
          <a
            href='#portfolio'
            className='px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg'
          >
            View Portfolio
          </a>
          <a
            href='#contact'
            className='px-6 py-3 border-2 border-primary text-primary dark:text-primary-light rounded-xl hover:bg-primary hover:text-white transition-colors duration-300'
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className='w-64 h-64 md:w-96 md:h-96 relative z-10'
      >
        <Image
          src={avartar}
          alt='Creative Designer'
          fill
          className='object-contain drop-shadow-2xl'
          priority
        />
      </motion.div>
    </section>
  )
}
