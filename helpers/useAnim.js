import { useEffect, useRef, useState } from 'react'

export default function useAnim() {
  const [anim, setAnim] = useState(false)
  const animRef = useRef()

  useEffect(() => {
    let observer = null
    const target = animRef.current

    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(target)
          setAnim(true)
        }
      })
    }, {
      threshold: 0.25
    })
    
    observer.observe(target)

    return () => {
      if (observer) {
        observer.unobserve(target)
      }
    }
  }, [])

  return { anim, animRef }
}
