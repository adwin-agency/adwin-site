import { useEffect, useRef, useState } from 'react'

export default function useAnim(isObserve) {
  const [anim, setAnim] = useState(false)

  const animRef = useRef()

  useEffect(() => {
    let observer = null
    const target = animRef.current

    if (isObserve) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.unobserve(target)
            setAnim(true)
          }
        })
      })
      observer.observe(target)
    } else {
      setAnim(true)
    }

    return () => {
      if (observer) {
        observer.unobserve(target)
      }
    }
  }, [])

  return { anim, animRef }
}
