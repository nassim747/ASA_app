'use client'

import { useState } from 'react'
import { Mail, MapPin, Send, Instagram } from 'lucide-react'
import DecorativeBorder from '@/components/DecorativeBorder'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const body = `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    const mailtoUrl = `mailto:asamcgill@ssmu.ca?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl, '_blank')

    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-heritage-cream">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="subtitle-heritage mb-6">
              We&apos;d Love to Hear From You
            </p>
            <h1 className="heading-heritage text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Get In <span className="font-serif italic">Touch</span>
            </h1>
            <p className="font-sans text-xl text-heritage-black/70 max-w-2xl mx-auto leading-relaxed">
              Have questions, want to get involved, or interested in partnering with us? 
              Reach out and we&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-heritage-cream-dark">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <p className="subtitle-heritage mb-4">Contact Information</p>
                <h2 className="heading-heritage text-3xl mb-8">
                  Reach <span className="font-serif italic">Out</span>
                </h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-heritage-green text-heritage-white flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-heritage-green mb-1">Email</h3>
                      <a 
                        href="mailto:asamcgill@ssmu.ca" 
                        className="font-sans text-heritage-black/70 hover:text-heritage-green transition-colors"
                      >
                        asamcgill@ssmu.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-heritage-green text-heritage-white flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-heritage-green mb-1">Location</h3>
                      <p className="font-sans text-heritage-black/70">
                        McGill University<br />
                        Montreal, Quebec, Canada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-serif text-lg text-heritage-green mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://instagram.com/asa.mcgill" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-heritage-green text-heritage-white flex items-center justify-center hover:bg-heritage-green-dark transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://tiktok.com/@asamcgill" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-heritage-green text-heritage-white flex items-center justify-center hover:bg-heritage-green-dark transition-colors"
                      aria-label="Follow us on TikTok"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/asamcgill" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-heritage-green text-heritage-white flex items-center justify-center hover:bg-heritage-green-dark transition-colors"
                      aria-label="Follow us on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>

              {/* Contact Form */}
              <div className="relative">
                <div className="card-heritage">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-heritage-green text-heritage-white flex items-center justify-center mx-auto mb-6">
                        <Mail className="h-8 w-8" />
                      </div>
                      <h3 className="heading-heritage text-2xl mb-3">
                        Message <span className="font-serif italic">Prepared</span>
                      </h3>
                      <p className="font-sans text-heritage-black/70 mb-6">
                        Your email client should have opened with the message. If it didn&apos;t, 
                        you can email us directly at{' '}
                        <a href="mailto:asamcgill@ssmu.ca" className="text-heritage-green font-semibold hover:underline">
                          asamcgill@ssmu.ca
                        </a>
                      </p>
                      <button 
                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                        className="btn-outline text-sm py-2 px-6"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="subtitle-heritage text-heritage-red mb-4">Send a Message</p>
                      <h3 className="heading-heritage text-2xl mb-6">
                        Write to <span className="font-serif italic">Us</span>
                      </h3>
                      
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block font-sans text-sm font-medium text-heritage-black/70 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-heritage-cream border border-heritage-sand font-sans focus:outline-none focus:border-heritage-green transition-colors"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block font-sans text-sm font-medium text-heritage-black/70 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-heritage-cream border border-heritage-sand font-sans focus:outline-none focus:border-heritage-green transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block font-sans text-sm font-medium text-heritage-black/70 mb-2">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-heritage-cream border border-heritage-sand font-sans focus:outline-none focus:border-heritage-green transition-colors"
                            placeholder="What's this about?"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block font-sans text-sm font-medium text-heritage-black/70 mb-2">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-heritage-cream border border-heritage-sand font-sans focus:outline-none focus:border-heritage-green transition-colors resize-none"
                            placeholder="Your message..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn-primary w-full flex items-center justify-center gap-2"
                        >
                          <Send className="h-4 w-4" />
                          Send Message
                        </button>
                      </form>
                    </>
                  )}
                </div>
                
                {/* Decorative corners */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-heritage-red" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-heritage-red" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Border */}
      <DecorativeBorder />
    </div>
  )
}
