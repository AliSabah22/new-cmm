'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemLock from '@/components/ProblemLock'
import Solution from '@/components/Solution'
import Testimonials from '@/components/Testimonials'
import TrustProof from '@/components/TrustProof'
import ClientWins from '@/components/ClientWins'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import FinalClose from '@/components/FinalClose'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Content hidden until splash screen completes, then fades in */}
      {showContent && (
        <div 
          className="transition-opacity ease-in-out"
          style={{ 
            animation: 'fadeIn 800ms ease-in-out',
          }}
        >
          <Navbar />
          <Hero />
          <ProblemLock />
          <Solution />
          <Testimonials />
          <TrustProof />
          <ClientWins />
          <WhoThisIsFor />
          <FinalClose />
        </div>
      )}
      {/* Splash screen - always rendered first, fades out to reveal content */}
      <SplashScreen onComplete={() => setShowContent(true)} />
    </main>
  )
}
