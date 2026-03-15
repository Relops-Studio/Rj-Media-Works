'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Youtube } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  specialty: string
  bio: string
  image: string
}

const team: TeamMember[] = [
  {
    name: 'Rohit Joshi',
    role: 'Founder & Director',
    specialty: 'Portrait · Editorial',
    bio: 'The visionary behind RJ Media Works. Ravi built this studio on one conviction — every brand has a story worth telling. With 8+ years behind the lens, he leads with purpose and passion.',
    image: '/team/DSC_9969%20copy.jpg.jpeg',
  },
  {
    name: 'Yogesh Papanwar',
    role: 'Cinematographer',
    specialty: 'Coordination · BTS',
    bio: 'The glue that holds every production together. Managing schedules, handling equipment, and capturing vital behind-the-scenes moments throughout the shoot.',
    image: '/team/Screenshot_20260222-233149.Instagram.png',
  },
  {
    name: 'Yogesh Papanwar',
    role: 'Cinematographer',
    specialty: 'Wedding · Brand Shoots',
    bio: 'Capturing emotions. Framing stories. Turning moments into timeless visuals. From traditional weddings to dynamic brand shoots, Yogesh creates visuals that speak louder than words.',
    image: '/team/BK0_0213%20copy.jpg.jpeg',
  },
  {
    name: 'Arujun Hambarde',
    role: 'Video Editor',
    specialty: 'Wedding · Brand Shoots',
    bio: "An eye for detail and light that elevates every frame. Trained in commercial photography, bringing magazine-ready quality to brand campaigns and live event coverage.",
    image: '/team/DSC_2237%20copy.jpg.jpeg',
  },
  {
    name: 'Sudarshan Sontakke',
    role: 'Reel Editor',
    specialty: 'Reels',
    bio: 'Capturing the essence of the moment with creativity and precision.',
    image: '/team/IMG_9333.JPG.jpeg',
  },
  {
    name: 'Alim Shaikh',
    role: 'Graphic Designer',
    specialty: ' Design and Posters',
    bio: 'Shaping the visual language of every RJ Media project.',
    image: '/team/FB_IMG_1772701688695.jpg.jpeg',
  },
  {
    name: 'Haji Baig Lucky',
    role: 'Videographer',
    specialty: 'Wedding · Brand Shoots',
    bio: 'Capturing moments with creativity and precision.',
    image: '/team/IMG_4808.jpg.jpeg',
  },
  {
    name: 'Karan Navghare',
    role: 'Photographer',
    specialty: 'Portrait ',
    bio: 'A visual storyteller with a passion for capturing the beauty of the world around him.',
    image: '/team/IMG_7124.JPG.jpeg',
  },

]

function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative overflow-hidden bg-[#0D1B5E] border border-white/5 hover:border-[#F5A820]/40 transition-all duration-500">
        {/* Photo */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Navy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B5E] via-[#0D1B5E]/20 to-transparent" />

          {/* Specialty badge */}
          <div
            className="absolute top-4 right-4 bg-[#0D1B5E]/80 backdrop-blur-sm border border-[#F5A820]/30 px-3 py-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="text-[#F5A820] text-[9px] tracking-[0.25em] uppercase font-light">
              {member.specialty}
            </span>
          </div>

          {/* Social icons — reveal on hover */}
          <div className="absolute bottom-4 left-4 flex gap-2.5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
            {member.social?.youtube && (
              <a
                href={member.social.youtube}
                className="w-8 h-8 bg-[#F5A820] flex items-center justify-center text-[#0D1B5E] hover:bg-white transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube size={13} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>

        {/* Info block */}
        <div className="p-6 border-t border-white/5">
          <h3
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-white text-2xl font-semibold leading-tight mb-1"
          >
            {member.name}
          </h3>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[#F5A820] text-[10px] tracking-[0.3em] uppercase font-bold mb-4"
          >
            {member.role}
          </p>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white/50 text-sm leading-relaxed mb-5"
          >
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Team() {
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })

  return (
    <section id="team" className="py-28 bg-[#0A1540] relative overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F5A820 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Orange glow top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#F5A820]/60 blur-sm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-[#F5A820]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-[#F5A820]/40" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#F5A820] text-[10px] tracking-[0.4em] uppercase font-light"
            >
              The Creatives
            </span>
            <div className="h-px w-12 bg-[#F5A820]/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-white text-5xl md:text-7xl font-light italic leading-none mb-6"
          >
            Meet the{' '}
            <span className="text-[#F5A820] not-italic font-semibold">
              Team
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white/40 text-base max-w-xl mx-auto leading-relaxed"
          >
            Passionate creatives united by one goal — capturing emotions,
            framing stories, and building brands that speak louder than words.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Bottom brand bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F5A820]/30 to-transparent" />
          <div className="flex items-center gap-3 pt-4">
            <div className="flex flex-col items-center justify-center opacity-70">
              <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-white text-xl font-semibold leading-none tracking-wider">
                RJ MEDIA
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#F5A820] text-[8px] tracking-[0.4em] uppercase mt-1">
                WORKS
              </span>
            </div>
          </div>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-white/25 text-[10px] tracking-[0.4em] uppercase"
          >
            We Build Brands
          </p>
        </motion.div>
      </div>
    </section>
  )
}
