'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import avartar from '../../public/avartar.png'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 py-24 px-6 md:px-16 bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-500'
    >
      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl'
      >
        <Image
          src={avartar}
          alt='About the Designer'
          fill
          className='object-cover'
        />
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='max-w-xl text-center md:text-left'
      >
        <h2 className='text-3xl md:text-5xl font-bold font-poppins text-primary mb-6'>
          About Me 💫
        </h2>
        <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
          Hi, I’m <span className='font-semibold text-primary'>Diwize</span> — a
          passionate graphics designer with a keen eye for color, typography,
          and storytelling through design. My goal is to help brands communicate
          visually in ways that connect, inspire, and leave memorable
          impressions.
        </p>
        <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8'>
          Whether it’s brand identity, digital illustrations, or web design, I
          craft visuals that blend creativity with strategy — ensuring each
          design tells a story.
        </p>
        <a
          href='#portfolio'
          className='px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors duration-300'
        >
          See My Work
        </a>
      </motion.div>
    </section>
  )
}
