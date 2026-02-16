import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About — ASA McGill',
  description: 'Learn about the Algerian Students Association at McGill University, our mission, values, and executive team.',
}

export default function AboutPage() {
  return <About />
}
