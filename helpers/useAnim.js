import { useEffect, useState } from 'react'

export default function useAnim() {
  const [anim, setAnim] = useState(false)

  useEffect(() => setAnim(true), [])

  return anim
}
