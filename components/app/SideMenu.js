import { useState } from 'react'
import cn from 'classnames'
import styles from './SideMenu.module.scss'

export default function SideMenu({ items }) {
  const [activeLink, setActiveLink] = useState(null)

  function handleClick(id) {
    return (e) => {
      e.preventDefault()

      const header = document.querySelector('#header')
      const target = document.querySelector(`#${id}`)
      const targetY = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight * 1.2

      window.scrollTo(0, targetY)
      setActiveLink(id)
    }
  }

  return (
    <div className={styles.el}>
      {items.map(item => (
        <a key={item.id} href={item.href} className={cn(styles.link, { [styles.active]: activeLink === item.id })} onClick={handleClick(item.id)}>{item.title}</a>
      ))}
    </div>
  )
}
