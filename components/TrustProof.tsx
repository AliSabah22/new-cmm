'use client'

import { useState, useEffect, useRef } from 'react'
import RollingNumber from './RollingNumber'

export default function TrustProof() {
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { 
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasStarted])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          Proof Of Installed Systems
        </h2>

        {/* Trustpilot Section */}
        <div className="mb-16 border border-charcoal bg-charcoal/20 p-8 rounded-sm">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Trustpilot Rating</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-gold">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gold fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-white/70 text-sm">Based on verified contractor reviews</p>
          </div>
        </div>

        {/* Revenue Numbers */}
        <div ref={sectionRef} className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16 max-w-5xl mx-auto">
          <div className="border border-charcoal bg-charcoal/20 p-12 md:p-16 rounded-sm text-center w-full md:w-1/2">
            <p className="text-white/60 text-base md:text-lg mb-4 uppercase tracking-wide">Total Revenue Generated</p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold">
              $<RollingNumber target={12000000} duration={5000} decimals={0} formatAtTarget={true} startImmediately={hasStarted} />+
            </p>
          </div>
          <div className="border border-charcoal bg-charcoal/20 p-12 md:p-16 rounded-sm text-center w-full md:w-1/2">
            <p className="text-white/60 text-base md:text-lg mb-4 uppercase tracking-wide">Success Stories</p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold">
              <RollingNumber target={200} duration={5000} decimals={0} startImmediately={hasStarted} />+
            </p>
          </div>
        </div>

        {/* Booked Jobs Screenshots Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">Recent Booked Jobs</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border border-charcoal bg-charcoal/30 rounded-sm overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-white/30 text-center p-4">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-xs">Job Screenshot {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
