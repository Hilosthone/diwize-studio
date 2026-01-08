'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { projects } from '../data/projectsData'

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id='portfolio'
      className='min-h-screen py-24 px-6 md:px-16 bg-white dark:bg-[#080808] text-gray-900 dark:text-gray-100 transition-colors duration-500'
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <h2 className='text-3xl md:text-5xl font-bold mb-4'>
          My{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500 dark:from-purple-400 dark:to-pink-400'>
            Works
          </span>{' '}
          🎨
        </h2>
        <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>
          A collection of my favorite design and branding projects — each one
          tells a story through creativity and precision.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedImage(project.img.src)}
            className='group relative rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer'
          >
            {/* IMAGE CONTAINER */}
            <div className='relative w-full h-80 overflow-hidden'>
              <Image
                src={project.img}
                alt={project.title}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-110'
              />

              {/* VIBRANT PURPLE OVERLAY ON HOVER */}
              <div className='absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8'>
                <div className='translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                  <h3 className='text-2xl font-bold text-white mb-1'>
                    {project.title}
                  </h3>
                  <p className='text-purple-200 text-sm font-medium'>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* DEFAULT LIGHT TEXT SHADOW (Visible before hover) */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500 pointer-events-none' />
              <div className='absolute bottom-6 left-8 group-hover:opacity-0 transition-opacity duration-500'>
                <h3 className='text-xl font-bold text-white'>
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX (FULL IMAGE VIEW) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className='fixed inset-0 bg-black/95 flex items-center justify-center z-[100] cursor-pointer p-4'
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='relative w-full max-w-5xl h-[80vh]'
            >
              <Image
                src={selectedImage}
                alt='Full project image'
                fill
                className='object-contain rounded-2xl'
              />
            </motion.div>

            {/* CLOSE BUTTON */}
            <button className='absolute top-10 right-10 text-white/50 hover:text-white transition-colors'>
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}