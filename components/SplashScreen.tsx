'use client'

import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete?: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [opacity, setOpacity] = useState(1) // Start at 1 (fully visible) so it's the first thing seen
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Wait a bit before starting fade out (give user time to see the splash)
    // Start fade out after 1400ms (visible for ~1400ms)
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0)
      // Call onComplete when fade out starts, so content can begin appearing
      if (onComplete) {
        onComplete()
      }
      // Remove from DOM after fade out completes (800ms)
      setTimeout(() => {
        setShouldRender(false)
      }, 800)
    }, 1400)

    return () => {
      clearTimeout(fadeOutTimer)
    }
  }, [onComplete])

  if (!shouldRender) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-dark flex items-center justify-center transition-opacity ease-in-out"
      style={{ 
        opacity: opacity,
        transitionDuration: '800ms',
        pointerEvents: opacity < 0.1 ? 'none' : 'auto'
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
