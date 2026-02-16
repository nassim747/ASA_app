import type { Metadata } from 'next'
import Events from '@/components/Events'

export const metadata: Metadata = {
  title: 'Events — ASA McGill',
  description: 'Discover upcoming and past events organized by the Algerian Students Association at McGill University.',
}

export default function EventsPage() {
  return <Events />
}
