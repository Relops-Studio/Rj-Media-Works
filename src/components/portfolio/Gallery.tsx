import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Category =
  | 'All'
  | 'Portrait'
  | 'Wedding'
  | 'Landscape'
  | 'Street'
  | 'Fashion'
  | 'Branding'

interface MediaItem {
  id: number
  url: string
  type: 'image' | 'video'
  category: Exclude<Category, 'All'>
  title: string
  span: 'normal' | 'tall' | 'wide' | 'large'
  objectPosition?: string
}

const media: MediaItem[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Portrait',
    title: 'Golden Hour',
    span: 'tall',
  },
  {
    id: 2,
    url: '/images/image1.jpeg',
    type: 'image',
    category: 'Wedding',
    title: 'Wedding Highlights',
    span: 'tall',
  },
  {
    id: 3,
    url: '/images/image5.jpeg',
    type: 'image',
    category: 'Branding',
    title: 'Brand Visual',
    span: 'wide',
  },
  {
    id: 4,
    url: '/images/image6.jpeg',
    type: 'image',
    category: 'Portrait',
    title: 'Portrait Session',
    span: 'normal',
  },
  {
    id: 5,
    url: '/images/image7.jpeg',
    type: 'image',
    category: 'Portrait',
    title: 'Moments',
    span: 'normal',
    objectPosition: 'center',
  },
  {
    id: 6,
    url: '/images/image8.jpeg',
    type: 'image',
    category: 'Portrait',
    title: 'Close Up',
    span: 'normal',
  },
  {
    id: 7,
    url: '/images/image3.jpeg',
    type: 'image',
    category: 'Wedding',
    title: 'First Dance',
    span: 'tall',
  },
  {
    id: 16,
    url: 'https://twrzptmrpk7hwoor.public.blob.vercel-storage.com/SHRADDHA%20%26%20KRISHNA%20HIGHLIGHT.mp4',
    type: 'video',
    category: 'Wedding',
    title: 'Wedding Video 2',
    span: 'large',
  },
  {
    id: 8,
    url: '/images/image9.jpeg',
    type: 'image',
    category: 'Landscape',
    title: 'Scenic View',
    span: 'wide',
  },
  {
    id: 10,
    url: '/images/image10.jpeg',
    type: 'image',
    category: 'Wedding',
    title: 'Ceremony',
    span: 'normal',
  },
  {
    id: 12,
    url: '/images/image11.jpeg',
    type: 'image',
    category: 'Portrait',
    title: 'Soft Light',
    span: 'tall',
  },
  {
    id: 13,
    url: '/images/image4.jpeg',
    type: 'image',
    category: 'Wedding',
    title: 'Wedding Highlights',
    span: 'tall',
  },
  {
    id: 14,
    url: '/images/image2.jpeg',
    type: 'image',
    category: 'Wedding',
    title: 'Wedding Highlights',
    span: 'tall',
  },
  {
    id: 17,
    url: '/images/image12.jpeg',
    type: 'image',
    category: 'Branding',
    title: 'Brand Story',
    span: 'normal',
  },
  {
    id: 18,
    url: '/images/image13.jpeg',
    type: 'image',
    category: 'Wedding',
    title: 'Wedding Candid',
    span: 'tall',
  },
  {
    id: 19,
    url: '/images/image14.jpeg',
    type: 'image',
    category: 'Portrait',
    title: 'Portrait Light',
    span: 'normal',
  },
  {
    id: 20,
    url: '/images/image15.jpeg',
    type: 'image',
    category: 'Wedding',
    title: 'Wedding Reception',
    span: 'wide',
  },
  {
    id: 21,
    url: '/images/image16.jpeg',
    type: 'image',
    category: 'Branding',
    title: 'Corporate Shoot',
    span: 'normal',
  },
  {
    id: 22,
    url: '/images/image17.jpeg',
    type: 'image',
    category: 'Portrait',
    title: 'Evening Portrait',
    span: 'tall',
  },
  {
    id: 23,
    url: '/images/image18.jpeg',
    type: 'image',
    category: 'Landscape',
    title: 'Self Potraits',
    span: 'normal',
  },
  {
    id: 24,
    url: '/images/image19.jpeg',
    type: 'image',
    category: 'Fashion',
    title: 'Fashion Editorial',
    span: 'tall',
  },
  {
    id: 25,
    url: '/images/image20.jpeg',
    type: 'image',
    category: 'Street',
    title: 'Street Life',
    span: 'normal',
  },
  {
    id: 26,
    url: '/images/image21.jpeg',
    type: 'image',
    category: 'Landscape',
    title: 'Golden Landscape',
    span: 'wide',
  },
  {
    id: 27,
    url: '/images/image22.jpeg',
    type: 'image',
    category: 'Branding',
    title: 'Brand Identity',
    span: 'normal',

  },
]

const categories: Category[] = [
  'All',
  'Portrait',
  'Wedding',
  'Landscape',
  'Street',
  'Fashion',
  'Branding',
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered =
    activeCategory === 'All'
      ? media
      : media.filter((p) => p.category === activeCategory)

  return (
    <section id="gallery" className="bg-[#060E2E] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-12 h-px bg-[#F5A820]" />
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#F5A820] text-xs tracking-[0.35em] uppercase"
            >
              Portfolio
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-white text-5xl md:text-7xl font-light mb-6"
          >
            Selected <span className="italic text-[#F5A820]">Work</span>
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className={`text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300 cursor-pointer ${activeCategory === cat
                  ? 'border-[#F5A820] bg-[#F5A820] text-[#0D1B5E] font-bold'
                  : 'border-white/20 text-white/50 hover:border-[#F5A820]/50 hover:text-[#F5A820]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Uniform Photo Grid — last row auto-fills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                {item.type === 'video' ? (
                  <video
                    src={item.url}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: item.objectPosition || 'center top' }}
                  />
                )}
                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0D1B5E]/90 via-[#0D1B5E]/20 to-transparent transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Info */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-300 ${hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[#F5A820] text-[10px] tracking-[0.3em] uppercase block mb-1"
                  >
                    {item.category}
                  </span>
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-white text-xl font-light"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

