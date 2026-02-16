import type { Metadata } from 'next'
import Join from '@/components/Join'

export const metadata: Metadata = {
  title: 'Join Us — ASA McGill',
  description: 'Learn how to join the Algerian Students Association team at McGill University as a coordinator.',
}

export default function JoinPage() {
  return <Join />
}
