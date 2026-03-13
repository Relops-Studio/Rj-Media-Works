'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { label: 'Work', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A1540]/95 backdrop-blur-md border-b border-[#F5A820]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center"
          >
            <div className="flex flex-col items-start justify-center">
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-2xl font-semibold leading-none tracking-wider">
                RJ MEDIA
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#F5A820] text-[9px] tracking-[0.4em] uppercase mt-1 pl-0.5">
                WORKS
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-white/70 hover:text-[#F5A820] text-sm tracking-[0.12em] uppercase transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNav('#contact')
            }}
            className="hidden md:block bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.2em] uppercase px-5 py-2.5 font-bold hover:bg-white hover:text-[#0D1B5E] transition-all duration-300"
          >
            Book Now
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-4 h-px bg-[#F5A820] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0D1B5E]/98 flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-3xl font-semibold leading-none tracking-wider">
                RJ MEDIA
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#F5A820] text-[10px] tracking-[0.4em] uppercase mt-1.5">
                WORKS
              </span>
            </div>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNav(link.href)}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-4xl font-light italic hover:text-[#F5A820] transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              onClick={(e) => {
                e.preventDefault()
                handleNav('#contact')
              }}
              className="mt-4 bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.2em] uppercase px-8 py-3 font-bold"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
