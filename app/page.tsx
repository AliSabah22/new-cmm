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
  const [contentOpacity, setContentOpacity] = useState(0)

  return (
    <main className="min-h-screen">
      {/* Content always rendered but hidden until splash fades out */}
      <div 
        style={{ 
          opacity: contentOpacity,
          transition: 'opacity 800ms ease-in-out',
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
      {/* Splash screen - fades out to reveal content underneath */}
      <SplashScreen onComplete={() => setContentOpacity(1)} />
    </main>
  )
}
