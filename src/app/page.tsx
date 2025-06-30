import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Events from '@/components/Events'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Events />
      <About />
      <Contact />
    </main>
  )
}
