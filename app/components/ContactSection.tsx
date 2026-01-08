'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  CheckCircle2,
  ArrowRight,
  Globe,
} from 'lucide-react'

const socialLinks = [
  { Icon: Facebook, href: 'https://facebook.com/OlusegunSolomon' },
  { Icon: Twitter, href: 'https://x.com/diwizestudio' },
  { Icon: Instagram, href: 'https://instagram.com/diwizestudio' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/diwizestudio' },
  { Icon: Github, href: 'https://github.com/diwizestudio' },
]

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      id='contact'
      className='relative min-h-screen py-32 px-6 md:px-16 bg-[#FDFDFD] dark:bg-[#050505] overflow-hidden transition-colors duration-700'
    >
      {/* Background Subtle Gradient */}
      <div className='absolute top-0 right-0 w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* SECTION HEADER */}
        <header className='mb-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center gap-2 mb-6'>
               <span className='px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest border border-purple-200 dark:border-purple-500/20'>
                Get in touch
              </span>
            </div>
            <h2 className='text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-gray-900 dark:text-white'>
              Let’s build something <br />
              <span className='text-gray-400 dark:text-gray-600 italic font-light'>remarkable together.</span>
            </h2>
          </motion.div>
        </header>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-20'>
          {/* LEFT: INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='lg:col-span-5 flex flex-col justify-between py-2'
          >
            <div className='space-y-16'>
              <div className='space-y-8'>
                <h3 className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400'>Contact Details</h3>
                <div className='space-y-6'>
                  <a href='mailto:diwizestudio001@gmail.com' className='group block'>
                    <p className='text-xs text-gray-400 mb-1'>Email</p>
                    <span className='text-2xl font-light group-hover:text-purple-500 transition-colors border-b border-transparent group-hover:border-purple-500/30 pb-1'>
                      diwizestudio001@gmail.com
                    </span>
                  </a>
                  <a href='tel:+2348127487723' className='group block'>
                    <p className='text-xs text-gray-400 mb-1'>Phone</p>
                    <span className='text-2xl font-light group-hover:text-purple-500 transition-colors border-b border-transparent group-hover:border-purple-500/30 pb-1'>
                      +234 812 7487 723
                    </span>
                  </a>
                </div>
              </div>

              <div className='space-y-8'>
                <h3 className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400'>Social Presence</h3>
                <div className='flex flex-wrap gap-3'>
                  {socialLinks.map(({ Icon, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all text-gray-600 dark:text-gray-400 hover:text-purple-600'
                    >
                      <Icon className='w-5 h-5' />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-16 pt-8 border-t border-gray-100 dark:border-white/5 flex items-center gap-4 text-gray-400'>
              <Globe className='w-4 h-4 animate-pulse' />
              <p className='text-xs uppercase tracking-widest font-medium'>Operating Worldwide from Nigeria</p>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='lg:col-span-7'
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='space-y-12 bg-white dark:bg-[#0A0A0A] p-10 md:p-14 rounded-[3rem] border border-gray-100 dark:border-white/5 shadow-2xl shadow-gray-200/40 dark:shadow-none'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='relative space-y-2'>
                  <label className='text-[10px] font-bold uppercase tracking-widest text-purple-600 ml-1'>Name</label>
                  <input
                    type='text'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                    className='w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-4 focus:border-purple-500 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-800 text-lg font-light'
                  />
                </div>
                <div className='relative space-y-2'>
                  <label className='text-[10px] font-bold uppercase tracking-widest text-purple-600 ml-1'>Email</label>
                  <input
                    type='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your@email.com'
                    className='w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-4 focus:border-purple-500 outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-800 text-lg font-light'
                  />
                </div>
              </div>

              <div className='relative space-y-2'>
                <label className='text-[10px] font-bold uppercase tracking-widest text-purple-600 ml-1'>How can I help? </label>
                <textarea
                  name='message'
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project...'
                  className='w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-4 focus:border-purple-500 outline-none transition-all resize-none placeholder:text-gray-300 dark:placeholder:text-gray-800 text-lg font-light leading-relaxed'
                />
              </div>

              <button
                type='submit'
                disabled={status === 'sending'}
                className='group relative w-full py-6 rounded-3xl overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-lg transition-all active:scale-[0.98] disabled:opacity-70'
              >
                <AnimatePresence mode='wait'>
                  {status === 'sending' ? (
                    <motion.div key='s' initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex items-center justify-center gap-3'>
                      <div className='w-5 h-5 border-2 border-current/30 border-t-current rounded-full animate-spin' />
                      <span>Sending...</span>
                    </motion.div>
                  ) : status === 'success' ? (
                    <motion.div key='su' initial={{ y: 20 }} animate={{ y: 0 }} className='flex items-center justify-center gap-2 text-green-500'>
                      <CheckCircle2 className='w-6 h-6' />
                      <span>Sent Successfully</span>
                    </motion.div>
                  ) : (
                    <motion.div key='i' initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex items-center justify-center gap-2'>
                      <span>Send Message</span>
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform' />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}