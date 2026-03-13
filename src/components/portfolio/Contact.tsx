import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Instagram, Mail, Phone, MapPin, Send, Youtube } from 'lucide-react'

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#060E2E] pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-12 h-px bg-[#F5A820]" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#F5A820] text-xs tracking-[0.35em] uppercase"
            >
              Contact
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-white text-5xl md:text-7xl font-light"
          >
            Let's Build <span className="italic text-[#F5A820]">Together</span>
          </h2>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white/50 text-base mt-4 leading-relaxed font-light"
          >
            Tell us about your project or occasion. We'll get back to you within
            24 hours with availability and a tailored package.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 pb-20">
          {/* Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-16 h-16 bg-[#F5A820] flex items-center justify-center mb-6">
                  <Send size={24} className="text-[#0D1B5E]" />
                </div>
                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-white text-3xl font-light mb-3"
                >
                  Message Received
                </h3>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-white/50 text-sm max-w-sm"
                >
                  Thank you for reaching out. We'll review your enquiry and be
                  in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 placeholder:text-white/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 placeholder:text-white/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, service: e.target.value }))
                    }
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="w-full bg-[#060E2E] border-b border-white/15 text-white/70 text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 cursor-pointer"
                  >
                    <option value="" className="bg-[#0D1B5E]">
                      Select a service…
                    </option>
                    <option value="wedding" className="bg-[#0D1B5E]">
                      Weddings
                    </option>
                    <option value="corporate" className="bg-[#0D1B5E]">
                      Corporate Events
                    </option>
                    <option value="advertisement" className="bg-[#0D1B5E]">
                      Advertisement
                    </option>
                    <option value="podcast" className="bg-[#0D1B5E]">
                      Podcast
                    </option>
                    <option value="video_edits" className="bg-[#0D1B5E]">
                      Video Edits
                    </option>
                    <option value="brand" className="bg-[#0D1B5E]">
                      Brand Shoots
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2"
                  >
                    Tell Us More
                  </label>
                  <textarea
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 resize-none placeholder:text-white/20"
                    placeholder="Dates, vision, details…"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="w-full sm:w-auto bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.25em] uppercase px-12 py-4 font-bold hover:bg-white transition-colors duration-300 flex items-center gap-3 cursor-pointer"
                >
                  Send Enquiry
                  <Send size={14} />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-2xl font-light mb-6"
              >
                Get In Touch
              </h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F5A820]/15 flex items-center justify-center flex-shrink-0">
                    <Mail
                      size={14}
                      className="text-[#F5A820]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-white/40 text-[10px] tracking-[0.3em] uppercase block mb-0.5"
                    >
                      Email
                    </span>
                    <a
                      href="mailto:hello@rjmediaworks.in"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-white/80 text-sm hover:text-[#F5A820] transition-colors"
                    >
                      hello@rjmediaworks.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F5A820]/15 flex items-center justify-center flex-shrink-0">
                    <Phone
                      size={14}
                      className="text-[#F5A820]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-white/40 text-[10px] tracking-[0.3em] uppercase block mb-0.5"
                    >
                      Phone
                    </span>
                    <a
                      href="tel:+919876543210"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-white/80 text-sm hover:text-[#F5A820] transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F5A820]/15 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      size={14}
                      className="text-[#F5A820]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-white/40 text-[10px] tracking-[0.3em] uppercase block mb-0.5"
                    >
                      Based In
                    </span>
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-white/80 text-sm"
                    >
                      India — Available Nationwide
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-xl font-light mb-4"
              >
                Follow Along
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#F5A820]/10 border border-[#F5A820]/20 flex items-center justify-center text-[#F5A820]/70 hover:bg-[#F5A820] hover:text-[#0D1B5E] transition-all duration-300"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#F5A820]/10 border border-[#F5A820]/20 flex items-center justify-center text-[#F5A820]/70 hover:bg-[#F5A820] hover:text-[#0D1B5E] transition-all duration-300"
                >
                  <Youtube size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Brand tagline card */}
            <div className="relative overflow-hidden bg-[#0D1B5E] border border-[#F5A820]/20 p-8">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F5A820]" />
              <div className="flex flex-col items-start justify-center mb-6">
                <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-2xl font-semibold leading-none tracking-wider">
                  RJ MEDIA
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#F5A820] text-[9px] tracking-[0.4em] uppercase mt-1 pl-0.5">
                  WORKS
                </span>
              </div>
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-xl italic font-light mb-2"
              >
                "Capturing emotions. Framing stories."
              </p>
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[#F5A820] text-[10px] tracking-widest uppercase"
              >
                We Build Brands
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/5 py-6 px-6 md:px-12 bg-[#060E2E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white/30 text-sm tracking-wider"
          >
            © {new Date().getFullYear()} RJ Media Works. All rights reserved.
          </span>
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[#F5A820]/40 text-xs tracking-widest uppercase"
          >
            We Build Brands
          </span>
        </div>
      </div>
    </section>
  )
}
