'use client'

import { useState, useEffect } from 'react'

export default function SplashScreen() {
  const [opacity, setOpacity] = useState(0)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Fade in: 0 to 100 over 800ms
    const fadeInTimer = setTimeout(() => {
      setOpacity(100)
    }, 10) // Small delay to trigger transition

    // Start fade out after 1400ms (800ms fade in + 600ms visible)
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0)
      // Remove from DOM after fade out completes (800ms)
      setTimeout(() => {
        setShouldRender(false)
      }, 800)
    }, 1400) // 800ms fade in + 600ms visible = 1400ms before fade out starts

    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(fadeOutTimer)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-dark flex items-center justify-center transition-opacity ease-in-out"
      style={{ 
        opacity: opacity / 100,
        transitionDuration: '800ms'
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
