'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    img: '/project1.jpg',
    description: 'Modern logo and brand palette for a creative agency.',
  },
  {
    id: 2,
    title: 'UI/UX Web Design',
    img: '/project1.jpg',
    description: 'Clean responsive website interface for a tech startup.',
  },
  {
    id: 3,
    title: 'Product Packaging',
    img: '/project1.jpg',
    description: 'Minimal and elegant product label design for skincare.',
  },
  {
    id: 4,
    title: 'Illustration Concept',
    img: '/project1.jpg',
    description: 'Digital art and storytelling through character illustration.',
  },
]

export default function PortfolioSection() {
  return (
    <section
      id='portfolio'
      className='min-h-screen py-24 px-6 md:px-16 bg-gradient-to-b from-background-light to-gray-50 dark:from-background-dark dark:to-gray-900 transition-colors duration-500 text-gray-900 dark:text-gray-100'
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
          My Portfolio 🖼️
        </h2>
        <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
          Here’s a glimpse of some recent projects that showcase my creativity,
          attention to detail, and passion for clean design.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className='relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer'
          >
            {/* IMAGE */}
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={400}
              className='object-cover w-full h-64 md:h-72 transition-transform duration-500 group-hover:scale-110'
            />

            {/* OVERLAY */}
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6'>
              <h3 className='text-2xl font-semibold text-white mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-200 text-sm'>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
