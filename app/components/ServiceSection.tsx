// 'use client'

// import { motion } from 'framer-motion'
// import { Card, CardContent } from '@/components/ui/card'
// import { Paintbrush, Laptop, PenTool, Camera } from 'lucide-react'

// const services = [
//   {
//     id: 1,
//     icon: <Paintbrush size={40} />,
//     title: 'Graphic Design',
//     description:
//       'Creative and modern designs for flyers, posters, logos, and branding materials that stand out.',
//   },
//   {
//     id: 2,
//     icon: <Laptop size={40} />,
//     title: 'UI/UX Design',
//     description:
//       'Designing user-friendly and visually appealing interfaces that enhance digital experiences.',
//   },
//   {
//     id: 3,
//     icon: <PenTool size={40} />,
//     title: 'Brand Identity',
//     description:
//       'Building unique brand identities with consistency across visuals, typography, and color palettes.',
//   },
//   {
//     id: 4,
//     icon: <Camera size={40} />,
//     title: 'Social Media Design',
//     description:
//       'Creating compelling content and promotional visuals for social media growth and engagement.',
//   },
// ]

// const Services = () => {
//   return (
//     <section id='services' className='py-16 bg-gray-50 dark:bg-gray-900'>
//       <div className='max-w-6xl mx-auto px-4 text-center'>
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className='text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-gray-100'
//         >
//           My Services
//         </motion.h2>

//         <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               whileHover={{ scale: 1.05 }}
//               className='transition-all duration-300'
//             >
//               <Card className='rounded-2xl shadow-md hover:shadow-xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700'>
//                 <CardContent className='p-6 flex flex-col items-center justify-center text-center space-y-4'>
//                   <div className='text-primary dark:text-primary-light'>
//                     {service.icon}
//                   </div>
//                   <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100'>
//                     {service.title}
//                   </h3>
//                   <p className='text-gray-600 dark:text-gray-300 text-sm'>
//                     {service.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services

//npx shadcn@latest add card



'use client'

import { motion } from 'framer-motion'
import { Paintbrush, Laptop, PenTool, Camera } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: <Paintbrush size={40} />,
    title: 'Graphic Design',
    description:
      'Creative and modern designs for flyers, posters, logos, and branding materials that stand out.',
  },
  {
    id: 2,
    icon: <Laptop size={40} />,
    title: 'UI/UX Design',
    description:
      'Designing user-friendly and visually appealing interfaces that enhance digital experiences.',
  },
  {
    id: 3,
    icon: <PenTool size={40} />,
    title: 'Brand Identity',
    description:
      'Building unique brand identities with consistency across visuals, typography, and color palettes.',
  },
  {
    id: 4,
    icon: <Camera size={40} />,
    title: 'Social Media Design',
    description:
      'Creating compelling content and promotional visuals for social media growth and engagement.',
  },
]

export default function Services() {
  return (
    <section
      id='services'
      className='py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500'
    >
      <div className='max-w-6xl mx-auto px-6 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-3xl md:text-5xl font-bold mb-12 text-primary'
        >
          My Services 💼
        </motion.h2>

        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className='bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center space-y-4 border border-gray-200 dark:border-gray-700'
            >
              <div className='text-primary dark:text-primary-light'>
                {service.icon}
              </div>
              <h3 className='text-lg font-semibold'>{service.title}</h3>
              <p className='text-gray-600 dark:text-gray-300 text-sm'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
