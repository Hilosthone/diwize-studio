'use client'

import { motion, Variants } from 'framer-motion'
import { Paintbrush, Laptop, PenTool, Camera } from 'lucide-react'

interface Service {
  id: number
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    id: 1,
    icon: <Paintbrush size={32} />,
    title: 'Graphic Design',
    description:
      'Creative and modern designs for flyers, posters, logos, and branding materials that stand out.',
  },
  {
    id: 2,
    icon: <Laptop size={32} />,
    title: 'UI/UX Design',
    description:
      'Designing user-friendly and visually appealing interfaces that enhance digital experiences.',
  },
  {
    id: 3,
    icon: <PenTool size={32} />,
    title: 'Brand Identity',
    description:
      'Building unique brand identities with consistency across visuals, typography, and color palettes.',
  },
  {
    id: 4,
    icon: <Camera size={32} />,
    title: 'Social Media Design',
    description:
      'Creating compelling content and promotional visuals for social media growth and engagement.',
  },
]

// 1. Fixed TypeScript error by explicitly typing variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', // TypeScript now accepts this via the Variants type
      stiffness: 100,
    },
  },
}

export default function Services() {
  return (
    <section
      id='services'
      className='py-24 bg-white dark:bg-[#080808] text-gray-900 dark:text-gray-100 transition-colors duration-500'
    >
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header with Purple Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            My{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500 dark:from-purple-400 dark:to-pink-400'>
              Services
            </span>{' '}
            💼
          </h2>
          <p className='text-gray-600 dark:text-gray-400 max-w-xl mx-auto'>
            I provide specialized design solutions tailored to help your brand
            grow and resonate with your audience.
          </p>
        </motion.div>

        {/* Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className='group p-8 rounded-[2rem] bg-gray-50/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10'
            >
              {/* Icon Container with Hover Logic */}
              <div className='w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300'>
                {service.icon}
              </div>

              <h3 className='text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                {service.title}
              </h3>

              <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}