import { useContext, useEffect, useState } from 'react'
import cn from 'classnames'
import AppContext from '../../context/AppContext'
import Arrow from '/icons/arrow.svg'
import styles from './SideMenu.module.scss'

export default function SideMenu({ items, modal }) {
  const [activeLink, setActiveLink] = useState(null)

  const ctx = useContext(AppContext)

  function handleClick(id) {
    return (e) => {
      e.preventDefault()

      const header = document.querySelector('#header')
      const target = document.querySelector(`#${id}`)
      const targetY = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight * 1.2

      window.scrollTo(0, targetY)
    }
  }

  useEffect(() => {
    let activeSection = null

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id
          setActiveLink(entry.target.id)
        } else if (activeSection === entry.target.id) {
          setActiveLink(null)
        }
      })
    }, {
      rootMargin: '-50% 0%'
    })

    items.forEach(item => {
      const target = document.querySelector(`#${item.id}`)
      observer.observe(target)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={styles.el}>
      {items.map(item => (
        <a key={item.id} href={`#${item.id}`} className={cn(styles.link, { [styles.active]: activeLink === item.id })} onClick={handleClick(item.id)}>{item.title}</a>
      ))}
      {modal && <button className={cn(styles.link, styles.btn)} onClick={ctx.openModal('request')}>Работать вместе <Arrow className={styles.icon} /></button>}
    </div>
  )
}
