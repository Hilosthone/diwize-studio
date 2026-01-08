'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import avartar from '../../public/avartar.png'
import { ArrowRight, Award, Zap, Heart } from 'lucide-react'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='relative min-h-screen flex items-center justify-center py-24 px-6 md:px-16 bg-white dark:bg-[#080808] overflow-hidden'
    >
      {/* Subtle Background Elements */}
      <div className='absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none' />

      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
        {/* IMAGE SIDE (5 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className='lg:col-span-5 relative'
        >
          {/* Main Image Container */}
          <div className='relative z-10 w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl'>
            <Image
              src={avartar}
              alt='Diwize'
              fill
              className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
            />
          </div>

          {/* Experience Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute -bottom-6 -right-6 z-20 bg-white dark:bg-[#111] p-6 rounded-3xl shadow-xl border border-black/5 dark:border-white/10'
          >
            <p className='text-4xl font-bold text-purple-600 dark:text-purple-400'>
              5+
            </p>
            <p className='text-xs uppercase tracking-widest font-bold opacity-50'>
              Years Exp.
            </p>
          </motion.div>

          {/* Decorative Frame */}
          <div className='absolute -top-4 -left-4 w-full h-full border-2 border-purple-500/20 rounded-[2rem] -z-10' />
        </motion.div>

        {/* TEXT SIDE (7 Columns) */}
        <div className='lg:col-span-7 space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className='text-xs font-bold uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 block mb-4'>
              The Creative Mind
            </span>
            <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-[1.1]'>
              Crafting <span className='italic text-gray-400'>meaningful</span>{' '}
              visuals that move brands forward.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <p className='text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light'>
              Hi, I’m{' '}
              <span className='text-gray-900 dark:text-white font-normal'>
                Diwize
              </span>{' '}
              — a designer specializing in the intersection of aesthetics and
              strategy. I don't just create images; I build visual languages
              that speak to your audience's subconscious.
            </p>

            {/* Micro-Stats / Bento Bits */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4'>
              {[
                { label: 'Branding', icon: Award },
                { label: 'Illustration', icon: Zap },
                { label: 'UI Design', icon: Heart },
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5'
                >
                  <item.icon size={18} className='text-purple-500' />
                  <span className='text-sm font-medium'>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-wrap items-center gap-6 pt-6'
          >
            <a
              href='#portfolio'
              className='group flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold transition-all hover:bg-purple-600 dark:hover:bg-purple-400 active:scale-95'
            >
              View Portfolio
              <ArrowRight
                size={18}
                className='group-hover:translate-x-1 transition-transform'
              />
            </a>
            <div className='flex -space-x-3'>
              {/* Placeholder for "Trusted by" circles or similar branding */}
              <div className='w-10 h-10 rounded-full border-2 border-white dark:border-[#080808] bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold'>
                Ps
              </div>
              <div className='w-10 h-10 rounded-full border-2 border-white dark:border-[#080808] bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold'>
                Ai
              </div>
              <div className='w-10 h-10 rounded-full border-2 border-white dark:border-[#080808] bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold'>
                Fi
              </div>
            </div>
            <p className='text-xs text-gray-500 font-medium uppercase tracking-widest'>
              Mastered Tools
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}