import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMedia } from '../../store'
import Header from './Header'

export default function Layout({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMedia(window.innerWidth))

    function handleResize() {
      dispatch(setMedia(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Header />
      {children}
    </>
  )
}
