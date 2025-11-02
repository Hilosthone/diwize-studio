// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { projects } from '../data/projectsData'

// export default function PortfolioSection() {
//   return (
//     <section
//       id='portfolio'
//       className='min-h-screen py-24 px-6 md:px-16 bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-500'
//     >
//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         viewport={{ once: true }}
//         className='text-center mb-16'
//       >
//         <h2 className='text-3xl md:text-5xl font-bold font-poppins text-primary mb-4'>
//           My Works 🎨
//         </h2>
//         <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
//           A collection of my favorite design and branding projects — each one
//           tells a story through creativity and precision.
//         </p>
//       </motion.div>

//       {/* PROJECT GRID */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.03 }}
//             className='group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl cursor-pointer'
//           >
//             {/* IMAGE */}
//             <div className='relative w-full h-56 pt-3 overflow-hidden'>
//               <Image
//                 src={project.img}
//                 alt={project.title}
//                 fill
//                 className='object-cover transition-transform duration-700 ease-out group-hover:scale-100 group-hover:brightness-90'
//               />
//               {/* Overlay */}
//               <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500'></div>
//             </div>

//             {/* TEXT */}
//             <div className='p-6 space-y-3'>
//               <h3 className='text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-500'>
//                 {project.title}
//               </h3>
//               <p className='text-gray-700 dark:text-gray-300'>
//                 {project.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { projects } from '../data/projectsData'

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
            onClick={() => setSelectedImage(project.img.src)}
            className='group relative rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl cursor-pointer'
          >
            {/* IMAGE */}
            <div className='relative w-full h-80 pt-3 overflow-hidden'>
              <Image
                src={project.img}
                alt={project.title}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
              />
              {/* GRADIENT OVERLAY */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500'></div>

              {/* TEXT OVER IMAGE */}
              <div className='absolute bottom-0 left-0 w-full p-6 text-white'>
                <h3 className='text-xl font-semibold text-white'>
                  {project.title}
                </h3>
                <p className='text-sm opacity-90'>{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX (FULL IMAGE VIEW) */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='relative w-[90vw] h-[80vh]'
          >
            <Image
              src={selectedImage}
              alt='Full project image'
              fill
              className='object-contain rounded-2xl'
            />
          </motion.div>
        </div>
      )}
    </section>
  )
}
