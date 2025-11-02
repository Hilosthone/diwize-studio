'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Github, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='bg-background-light dark:bg-background-dark text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 py-10 px-6 md:px-16'
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* LOGO / BRAND */}
        <div className='text-center md:text-left space-y-2'>
          <h3 className='text-2xl font-bold text-primary font-poppins'>
            Diwize{' '}
            <span className='text-gray-900 dark:text-gray-100'>Studio</span>
          </h3>
          <p className='text-sm'>
            Crafting visuals, brands, and digital experiences that shine ✨
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className='text-center'>
          <h4 className='font-semibold mb-4 text-primary'>Quick Links</h4>
          <ul className='space-y-2'>
            <li>
              <a
                href='#home'
                className='hover:text-primary transition-colors duration-300'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='hover:text-primary transition-colors duration-300'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#portfolio'
                className='hover:text-primary transition-colors duration-300'
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href='#services'
                className='hover:text-primary transition-colors duration-300'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='hover:text-primary transition-colors duration-300'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div className='text-center md:text-right space-y-4'>
          <h4 className='font-semibold text-primary'>Follow Me</h4>
          <div className='flex justify-center md:justify-end space-x-4'>
            <a
              href='https://facebook.com/OlusegunSolomon'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Facebook className='w-5 h-5' />
            </a>
            <a
              href='https://x.com/diwizestudio'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Twitter className='w-5 h-5' />
            </a>
            <a
              href='https://instagram.com/diwizestudio'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Instagram className='w-5 h-5' />
            </a>
            <a
              href='https://linkedin.com/company/diwizestudio'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Linkedin className='w-5 h-5' />
            </a>
            <a
              href='https://github.com/diwizestudio'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Github className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className='border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400'>
        © {new Date().getFullYear()} Diwize Studio. Crafted with 💜 by
        <span className='font-semibold text-primary'> Hilosthone</span>.
      </div>
    </motion.footer>
  )
}


// 'use client'

// import { motion } from 'framer-motion'
// import { Instagram, Linkedin, Github, Facebook, Twitter } from 'lucide-react'

// export default function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className='relative overflow-hidden text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 py-10 px-6 md:px-16'
//     >
//       {/* 🌈 Gradient Glow Background */}
//       <div className='absolute inset-0 -z-10 bg-gradient-to-b from-purple-100 via-white to-transparent dark:from-purple-900/40 dark:via-gray-900 dark:to-background-dark blur-3xl opacity-80'></div>

//       <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10'>
//         {/* LOGO / BRAND */}
//         <div className='text-center md:text-left space-y-2'>
//           <h3 className='text-2xl font-bold text-primary font-poppins'>
//             Diwize{' '}
//             <span className='text-gray-900 dark:text-gray-100'>Studio</span>
//           </h3>
//           <p className='text-sm'>
//             Crafting visuals, brands, and digital experiences that shine ✨
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div className='text-center'>
//           <h4 className='font-semibold mb-4 text-primary'>Quick Links</h4>
//           <ul className='space-y-2'>
//             {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map(
//               (item) => (
//                 <li key={item}>
//                   <a
//                     href={`#${item.toLowerCase()}`}
//                     className='hover:text-primary transition-colors duration-300'
//                   >
//                     {item}
//                   </a>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* SOCIALS */}
//         <div className='text-center md:text-right space-y-4'>
//           <h4 className='font-semibold text-primary'>Follow Me</h4>
//           <div className='flex justify-center md:justify-end space-x-4'>
//             <a
//               href='https://facebook.com/OlusegunSolomon'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
//             >
//               <Facebook className='w-5 h-5' />
//             </a>
//             <a
//               href='https://x.com/diwizestudio'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
//             >
//               <Twitter className='w-5 h-5' />
//             </a>
//             <a
//               href='https://instagram.com/diwizestudio'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
//             >
//               <Instagram className='w-5 h-5' />
//             </a>
//             <a
//               href='https://linkedin.com/company/diwizestudio'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
//             >
//               <Linkedin className='w-5 h-5' />
//             </a>
//             <a
//               href='https://github.com/diwizestudio'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
//             >
//               <Github className='w-5 h-5' />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* COPYRIGHT */}
//       <div className='border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400 relative z-10'>
//         © {new Date().getFullYear()} Diwize Studio. Crafted with 💜 by
//         <span className='font-semibold text-primary'> Hilosthone</span>.
//       </div>
//     </motion.footer>
//   )
// }
 