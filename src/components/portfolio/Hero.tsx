import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const slides = [
  {
    url: '/images/weworks.jpg?crop=1',
    label: 'Portrait',
    caption: 'Emotions Frozen in Time',
  },
  {
    url: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=1920&q=85&fit=crop',
    label: 'Wedding',
    caption: 'Moments That Last Forever',
  },
  {
    url: 'https://images.unsplash.com/photo-1449495169669-7b118f960251?w=1920&q=85&fit=crop',
    label: 'Cinematic',
    caption: 'The World Through Our Lens',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const goTo = (idx: number) => {
    setCurrent(idx)
    if (timerRef.current) clearInterval(timerRef.current)
    startTimer()
  }

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#0D1B5E]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.url}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.url}
            alt={slide.label}
            className="w-full h-full object-cover scale-105"
            style={{
              transform: i === current ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-out',
            }}
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Navy gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B5E] via-[#0D1B5E]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B5E] via-[#0D1B5E]/80 to-transparent w-full md:w-3/4" />
        </div>
      ))}

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Orange accent bar — top left */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F5A820] via-[#F5A820]/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16 max-w-7xl mx-auto left-0 right-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Category pill */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-[#F5A820]" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#F5A820] text-xs tracking-[0.3em] uppercase"
            >
              {slides[current].label} · RJ Media Works
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-white text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.9] mb-6"
          >
            <span className="block">We Build</span>
            <span className="block italic text-[#F5A820]">Brands</span>
            <span className="block">Visually</span>
          </h1>

          {/* Caption */}
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white/60 text-base md:text-lg tracking-wide max-w-sm mb-10 font-light"
          >
            {slides[current].caption}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-6 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document
                  .querySelector('#gallery')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.25em] uppercase px-8 py-4 font-bold hover:bg-white transition-colors duration-300 cursor-pointer"
            >
              View Portfolio
            </motion.button>
            <button
              onClick={() => {
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-white/70 text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:text-[#F5A820] transition-colors duration-300 cursor-pointer group"
            >
              Book a Session
              <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 md:right-16 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 cursor-pointer ${i === current
              ? 'w-8 h-0.5 bg-[#F5A820]'
              : 'w-2 h-0.5 bg-white/30 hover:bg-white/60'
              }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-white/30 text-[9px] tracking-[0.4em] uppercase"
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#F5A820]/70 to-transparent"
        />
      </motion.div>
    </section>
  )
}
