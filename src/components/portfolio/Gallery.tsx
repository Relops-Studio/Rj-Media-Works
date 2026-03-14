import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'

type Category =
  | 'All'
  | 'Portrait'
  | 'Wedding'
  | 'Landscape'
  | 'Street'
  | 'Fashion'

interface MediaItem {
  id: number
  url: string
  type: 'image' | 'video'
  category: Exclude<Category, 'All'>
  title: string
  span: 'normal' | 'tall' | 'wide'
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
    url: '/videos/sample.mp4',
    type: 'video',
    category: 'Wedding',
    title: 'Wedding Highlights',
    span: 'wide',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Landscape',
    title: 'Mountain Dawn',
    span: 'wide',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Portrait',
    title: 'The Thinker',
    span: 'normal',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Fashion',
    title: 'Editorial Noir',
    span: 'tall',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Street',
    title: 'City Pulse',
    span: 'normal',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Wedding',
    title: 'First Dance',
    span: 'normal',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Landscape',
    title: 'Foggy Valley',
    span: 'wide',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Fashion',
    title: 'Urban Grace',
    span: 'tall',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Street',
    title: 'Night City',
    span: 'normal',
  },
  {
    id: 11,
    url: '/videos/sample.mp4',
    type: 'video',
    category: 'Fashion',
    title: 'Fashion Reel',
    span: 'normal',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&fit=crop',
    type: 'image',
    category: 'Portrait',
    title: 'Soft Light',
    span: 'tall',
  },
]

const categories: Category[] = [
  'All',
  'Portrait',
  'Wedding',
  'Landscape',
  'Street',
  'Fashion',
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
                className={`text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'border-[#F5A820] bg-[#F5A820] text-[#0D1B5E] font-bold'
                    : 'border-white/20 text-white/50 hover:border-[#F5A820]/50 hover:text-[#F5A820]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`break-inside-avoid relative overflow-hidden group cursor-pointer ${
                item.span === 'tall' ? 'row-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative overflow-hidden ${
                  item.span === 'tall'
                    ? 'aspect-[3/4]'
                    : item.span === 'wide'
                      ? 'aspect-[16/9]'
                      : 'aspect-[4/3]'
                }`}
              >
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
                  />
                )}
                {/* Hover overlay — navy */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0D1B5E]/90 via-[#0D1B5E]/20 to-transparent transition-opacity duration-400 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Info */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-400 ${
                    hoveredId === item.id
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
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
