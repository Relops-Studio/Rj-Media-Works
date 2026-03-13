import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Heart,
  Building2,
  Megaphone,
  Mic,
  Video,
  Aperture,
} from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description:
      'Full-day cinematic coverage of your most precious celebration — from quiet morning preparations to the last dance. Every emotion, beautifully preserved.',
    features: [
      '8–12 hours coverage',
      'Cinematic highlights',
      'Online gallery',
      'High-resolution output',
    ],
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description:
      'Professional coverage for seminars, conferences, and brand activations with a focus on capturing key moments and speaker highlights.',
    features: [
      'Multi-camera setup',
      'Quick turnaround',
      'Highlight reels',
      'Commercial usage rights',
    ],
  },
  {
    icon: Megaphone,
    title: 'Advertisement',
    description:
      'High-impact commercial video productions tailored for social media, television, and digital marketing campaigns.',
    features: [
      'Concept development',
      'Creative direction',
      'Multi-format delivery',
      'Campaign usage',
    ],
  },
  {
    icon: Mic,
    title: 'Podcast',
    description:
      'End-to-end podcast production including multi-cam video recording, high-fidelity audio engineering, and dynamic editing.',
    features: [
      'Multi-cam recording',
      'Audio mixing',
      'Social media snippets',
      'Full episode edits',
    ],
  },
  {
    icon: Video,
    title: 'Video Edits',
    description:
      'Expert post-production services including color grading, sound design, and narrative shaping for your existing raw footage.',
    features: [
      'Color grading',
      'Sound design',
      'Motion graphics',
      'Fast turnarounds',
    ],
  },
  {
    icon: Aperture,
    title: 'Brand Shoots',
    description:
      'Dynamic brand photography and videography that tells your brand story and speaks louder than words across all media.',
    features: [
      'Brand strategy call',
      'Multi-platform assets',
      'Video reels',
      'Same-week delivery',
    ],
  },
]

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-[#060E2E] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-12 h-px bg-[#F5A820]" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#F5A820] text-xs tracking-[0.35em] uppercase"
            >
              Services
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-white text-5xl md:text-7xl font-light"
          >
            What We <span className="italic text-[#F5A820]">Offer</span>
          </h2>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white/50 text-base mt-4 leading-relaxed font-light"
          >
            Every engagement is tailored. These are starting points — the final
            package is always crafted around your vision.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#060E2E] p-8 group hover:bg-[#0D1B5E] transition-colors duration-300 border-l-2 border-transparent hover:border-[#F5A820]"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#F5A820]/10 flex items-center justify-center group-hover:bg-[#F5A820]/20 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[#F5A820]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-white text-2xl font-light mb-3"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-white/50 text-sm leading-relaxed mb-6 font-light"
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="flex items-center gap-2 text-xs text-white/40"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A820]/70 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => {
                      document
                        .querySelector('#contact')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-white/40 text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 hover:text-[#F5A820] transition-colors duration-300 cursor-pointer group/link"
                  >
                    Enquire
                    <span className="block w-4 h-px bg-current transition-all duration-300 group-hover/link:w-6" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
