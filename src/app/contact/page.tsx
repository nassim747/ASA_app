import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact — ASA McGill',
  description: 'Get in touch with the Algerian Students Association at McGill University. We would love to hear from you.',
}

export default function ContactPage() {
  return <Contact />
}
