import Link from 'next/link'
import DecorativeBorder from '@/components/DecorativeBorder'

export default function NotFound() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center py-20">
            <p className="subtitle-heritage mb-6">Page Not Found</p>
            <h1 className="heading-heritage text-7xl md:text-8xl mb-4">404</h1>
            <p className="font-sans text-xl text-heritage-black/70 mb-8 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/" className="btn-primary inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <DecorativeBorder />
    </div>
  )
}
