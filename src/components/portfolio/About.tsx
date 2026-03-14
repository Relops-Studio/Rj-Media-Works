import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '150+', label: 'Weddings' },
  { value: '35+', label: 'Corporate Events' },
  { value: '75+', label: 'Live Events Coverage' },
  { value: '1000+', label: 'Editing Projects' },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="bg-[#0D1B5E] py-28 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/founder.heic"
                  alt="RJ Media Works"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Orange accent frame */}
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border border-[#F5A820]/40 -z-10" />
              {/* Navy corner square */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F5A820]/10 border border-[#F5A820]/20 -z-10" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-3 -left-3 md:-left-8 bg-[#F5A820] p-6 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40"
            >
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[#0D1B5E] text-4xl md:text-5xl font-bold leading-none"
              >
                5+
              </span>
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[#0D1B5E]/80 text-[10px] tracking-widest uppercase text-center mt-1 font-semibold"
              >
                Years of
                <br />
                Excellence
              </span>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-12 h-px bg-[#F5A820]" />
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[#F5A820] text-xs tracking-[0.35em] uppercase"
              >
                About Us
              </span>
            </div>

            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-white text-5xl md:text-6xl font-light leading-tight mb-6"
            >
              Where Vision
              <br />
              Meets <span className="italic text-[#F5A820]">Craft</span>
            </h2>

            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-white/60 text-base leading-relaxed mb-4 font-light"
            >
              RJ Media Works is a creative media studio dedicated to capturing stories and transforming them into visually engaging experiences. With a passion for creativity and a strong focus on quality, RJ Media Works specializes in producing cinematic wedding films, wedding highlights, traditional wedding videos, reels, podcasts, and promotional advertisements.
            </p>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-white/50 text-base leading-relaxed mb-4 font-light"
            >
              We believe that every moment has a story worth telling. Our goal is to preserve those moments through thoughtful editing, creative storytelling, and modern visual techniques. Whether it is a once-in-a-lifetime wedding celebration, a brand looking to promote its identity, or a creator wanting impactful digital content, RJ Media Works ensures that every project is crafted with precision and creativity.
            </p>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-white/50 text-base leading-relaxed mb-4 font-light"
            >
              Our work is driven by attention to detail and an understanding of emotions behind every frame. By combining technical expertise with artistic vision, we create videos that are not only visually appealing but also meaningful and memorable.
            </p>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-white/50 text-base leading-relaxed mb-10 font-light"
            >
              At RJ Media Works, we continuously explore new ideas, trends, and technologies to deliver fresh and engaging content. Our commitment is to provide clients with high-quality media that reflects their personality, brand, and story. RJ Media Works is not just about editing videos — it is about creating lasting impressions through powerful visuals and storytelling.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="border-l-2 border-[#F5A820] pl-4"
                >
                  <div
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-[#F5A820] text-4xl font-light"
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-white/50 text-xs tracking-widest uppercase mt-1"
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.25em] uppercase px-8 py-4 font-bold hover:bg-white hover:text-[#0D1B5E] transition-all duration-300 cursor-pointer"
            >
              Work With Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
