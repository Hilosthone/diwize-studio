'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '../data/projectsData'

export default function PortfolioSection() {
  return (
    <section
      id='portfolio'
      className='min-h-screen py-24 px-6 md:px-16 bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-500'
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <h2 className='text-3xl md:text-5xl font-bold font-poppins text-primary mb-4'>
          My Works 🎨
        </h2>
        <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
          A collection of my favorite design and branding projects — each one
          tells a story through creativity and precision.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className='group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl cursor-pointer'
          >
            {/* IMAGE */}
            <div className='relative w-full h-56 pt-3 overflow-hidden'>
              <Image
                src={project.img}
                alt={project.title}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-100 group-hover:brightness-90'
              />
              {/* Overlay */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500'></div>
            </div>

            {/* TEXT */}
            <div className='p-6 space-y-3'>
              <h3 className='text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-500'>
                {project.title}
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
