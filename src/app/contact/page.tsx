import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ASA McGill</h3>
            <p className="text-gray-300 mb-4">
              Algerian Students Association at McGill University
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 ASA McGill. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 