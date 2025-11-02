'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Github,
  Facebook,
  Twitter,
} from 'lucide-react'

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='min-h-screen py-24 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-background-light dark:from-gray-900 dark:to-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-500'
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
          Let’s Work Together 💌
        </h2>
        <p className='text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
          Got a project or an idea? I’d love to hear from you! Fill out the form
          or reach out through any of the channels below.
        </p>
      </motion.div>

      {/* CONTACT GRID */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
        {/* LEFT INFO SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='space-y-6'
        >
          <h3 className='text-2xl font-semibold text-primary mb-4'>
            Get in Touch
          </h3>
          <p className='text-gray-700 dark:text-gray-300'>
            Whether it’s a freelance gig, design collaboration, or just a
            friendly chat — I’m always open to connect.
          </p>

          <div className='flex items-center space-x-4'>
            <Mail className='w-6 h-6 text-primary' />
            <span>diwizestudio001@gmail.com</span>
          </div>

          <div className='flex items-center space-x-4'>
            <Phone className='w-6 h-6 text-primary' />
            <span>+234 812 7487 723</span>
          </div>

          {/* SOCIAL ICONS */}
          <div className='flex flex-wrap gap-4 mt-6'>
            <a
              href='https://facebook.com/OlusegunSolomon'
              target='_blank'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Facebook className='w-5 h-5' />
            </a>
            <a
              href='https://x.com/diwizestudio'
              target='_blank'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Twitter className='w-5 h-5' />
            </a>
            <a
              href='https://instagram.com/diwizestudio'
              target='_blank'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Instagram className='w-5 h-5' />
            </a>
            <a
              href='https://linkedin.com/company/diwizestudio'
              target='_blank'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Linkedin className='w-5 h-5' />
            </a>
            <a
              href='https://github.com/diwizestudio'
              target='_blank'
              className='p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition'
            >
              <Github className='w-5 h-5' />
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM SIDE */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6'
        >
          <div>
            <label className='block mb-2 font-semibold'>Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              className='w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none'
            />
          </div>

          <div>
            <label className='block mb-2 font-semibold'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none'
            />
          </div>

          <div>
            <label className='block mb-2 font-semibold'>Message</label>
            <textarea
              rows={5}
              placeholder='Your message...'
              className='w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none'
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition'
          >
            Send Message ✨
          </button>
        </motion.form>
      </div>
    </section>
  )
}
