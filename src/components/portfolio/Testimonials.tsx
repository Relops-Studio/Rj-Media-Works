import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    text: "Your passion for storytelling always shines through. You turned a simple candid moment into a beautiful memory I'll always cherish. Your dedication tells me you'll be the best photographer and editor in Basmath city. Service first, money later — keep growing!",
    name: 'Adv Sahil Satpute',
    role: 'Friend & Client',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80&fit=crop&crop=face',
  },
  {
    text: "RJ Media Works captured our wedding with such sensitivity and artistry. Every single image feels cinematic. We've printed a gallery wall and cannot stop staring at it. Worth every rupee.",
    name: 'Priya & Rohan',
    role: 'Wedding Clients, Mumbai',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&fit=crop&crop=face',
  },
  {
    text: 'I hired RJ Media for our brand campaign and the results were extraordinary. They understood our vision immediately and pushed it further than we imagined. The work is already running across three platforms.',
    name: 'Vikram Patel',
    role: 'Founder, Urban Brands Co.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop&crop=face',
  },
  {
    text: 'Yogesh has a rare gift — he sees emotion before it happens and captures it perfectly. Our event photos felt like a film. We get compliments on them constantly.',
    name: 'Neha Sharma',
    role: 'Event Organiser, Pune',
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80&fit=crop&crop=face',
  },
  {
    text: 'We commissioned RJ Media for product shoots across 12 SKUs. Their efficiency and quality are unparalleled. All images delivered within 48 hours, perfectly edited and ready for launch.',
    name: 'Aditya Khanna',
    role: 'Marketing Head, Elevate Lifestyle',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&fit=crop&crop=face',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="bg-[#0D1B5E] py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-12 h-px bg-[#F5A820]" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#F5A820] text-xs tracking-[0.35em] uppercase"
            >
              Testimonials
            </span>
            <span className="block w-12 h-px bg-[#F5A820]" />
          </div>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-white text-5xl md:text-6xl font-light"
          >
            Words from <span className="italic text-[#F5A820]">Clients</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 md:px-12"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="text-[#F5A820]/40 mx-auto mb-8"
                strokeWidth={1}
              />

              <blockquote
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white/80 text-2xl md:text-3xl font-light italic leading-relaxed mb-10"
              >
                "{testimonials[current].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#F5A820]/50"
                />
                <div className="text-left">
                  <div
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-white text-sm font-medium"
                  >
                    {testimonials[current].name}
                  </div>
                  <div
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-white/40 text-xs tracking-wide"
                  >
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/40 hover:border-[#F5A820] hover:text-[#F5A820] hover:bg-[#F5A820]/10 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 cursor-pointer ${i === current
                      ? 'w-6 h-0.5 bg-[#F5A820]'
                      : 'w-2 h-0.5 bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/40 hover:border-[#F5A820] hover:text-[#F5A820] hover:bg-[#F5A820]/10 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
