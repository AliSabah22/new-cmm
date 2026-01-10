'use client'

import { useState, useEffect, useRef } from 'react'

interface RollingNumberProps {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
  formatAtTarget?: boolean // If true, only format as M/K when reaching target, otherwise show full numbers
  startImmediately?: boolean // If true, start animation immediately without IntersectionObserver
}

export default function RollingNumber({ 
  target, 
  prefix = '', 
  suffix = '', 
  duration = 2000,
  decimals = 0,
  formatAtTarget = false,
  startImmediately = false
}: RollingNumberProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (startImmediately) {
      setHasStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { 
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Start a bit before the element fully enters viewport
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasStarted, startImmediately])

  // Start animation when startImmediately prop becomes true
  useEffect(() => {
    if (startImmediately && !hasStarted) {
      setHasStarted(true)
    }
  }, [startImmediately])

  useEffect(() => {
    if (!hasStarted) return

    const startValue = 0
    const endValue = target
    const startTime = Date.now()

    const formatNumber = (num: number): string => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(decimals) + 'M'
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(decimals) + 'K'
      }
      return num.toFixed(decimals)
    }

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = startValue + (endValue - startValue) * easeOutQuart
      setCount(Math.floor(currentValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target, duration, decimals, formatAtTarget])

  const formatDisplayValue = (num: number): string => {
    // If formatAtTarget is true, show full numbers during animation, format only when reaching target
    if (formatAtTarget) {
      // Only format as millions when we've reached or passed the target value
      // For 12M specifically, format when num >= 12,000,000
      if (target >= 1000000 && num >= target) {
        const millions = (target / 1000000).toFixed(decimals)
        return millions.replace(/\.?0+$/, '') + 'M'
      }
      // During animation (when num < target), show full formatted number with commas
      return num.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })
    }
    
    // Default behavior: format based on value
    if (num >= 1000000) {
      const millions = (num / 1000000).toFixed(decimals)
      return millions.replace(/\.?0+$/, '') + 'M'
    }
    if (num >= 1000) {
      const thousands = (num / 1000).toFixed(decimals)
      return thousands.replace(/\.?0+$/, '') + 'K'
    }
    return num.toLocaleString()
  }

  // Show 0 when not started, or the animated count when started
  const displayValue = hasStarted ? count : 0

  return (
    <span ref={ref}>
      {prefix}{formatDisplayValue(displayValue)}{suffix}
    </span>
  )
}
