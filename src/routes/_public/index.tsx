import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/portfolio/Nav'
import { Hero } from '@/components/portfolio/Hero'
import { Gallery } from '@/components/portfolio/Gallery'
import { About } from '@/components/portfolio/About'
import { Services } from '@/components/portfolio/Services'
import { Team } from '@/components/portfolio/Team'
import { Testimonials } from '@/components/portfolio/Testimonials'
import { Contact } from '@/components/portfolio/Contact'

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div style={{ background: '#0a0a0a' }} className="min-h-screen">
      <Nav />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  )
}
