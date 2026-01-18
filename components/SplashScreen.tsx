'use client'

import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete?: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isFadingIn, setIsFadingIn] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Start fade in after mount
    const fadeInTimer = setTimeout(() => {
      setIsFadingIn(true)
    }, 10)
    
    // Wait before starting fade out (800ms fade in + 1400ms visible = 2200ms)
    const fadeOutTimer = setTimeout(() => {
      // Trigger content fade-in when splash starts fading out
      if (onComplete) {
        onComplete()
      }
      // Start fade out
      setIsFadingOut(true)
      // Remove from DOM after fade out completes (800ms)
      setTimeout(() => {
        setIsVisible(false)
      }, 800)
    }, 2200)

    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(fadeOutTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-dark flex items-center justify-center transition-opacity duration-800 ease-in-out ${
        isFadingOut ? 'opacity-0' : isFadingIn ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        transitionDuration: '800ms',
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
    >
      <img 
        src="/logo.svg" 
        alt="CMM Logo" 
        className="h-24 sm:h-32 lg:h-40 w-auto"
      />
    </div>
  )
}
