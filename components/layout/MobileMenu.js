import { useContext } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Button from '../ui/Button'
import WhatsappIcon from '/icons/whatsapp.svg'
import VkIcon from '/icons/vk.svg'
import AppContext from '../../context/AppContext'
import contacts from '/data/contacts'
import styles from './MobileMenu.module.scss'

export default function MobileMenu({ className, onLinkClick }) {
  const ctx = useContext(AppContext)

  return (
    <div className={cn(styles.el, className)}>
      <div className={styles.main}>
        <div className='container'>
          <div className={styles.menu}>
            <div className={styles.item}>
              <Link href='/about' className={styles.link} onClick={onLinkClick}>Об агентстве</Link>
            </div>
            <div className={styles.item}>
              <Link href='/services' className={styles.link} onClick={onLinkClick}>Услуги</Link>
              <div className={styles.submenu}>
                <div className={styles.subgroup}>
                  <Link href='/services/landing' className={styles.sublink} onClick={onLinkClick}>Лендинги</Link>
                  <Link href='/services/corporate' className={styles.sublink} onClick={onLinkClick}>Корпоративные сайты</Link>
                  <Link href='/services/store' className={styles.sublink} onClick={onLinkClick}>Интернет-магазины</Link>
                </div>
                <div className={styles.subgroup}>
                  <Link href='/services/complex' className={styles.sublink} onClick={onLinkClick}>Комплексная реклама</Link>
                  <Link href='/services/context' className={styles.sublink} onClick={onLinkClick}>Контекстная реклама</Link>
                  <Link href='/services/target' className={styles.sublink} onClick={onLinkClick}>Таргетированная реклама</Link>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <Link href='/projects' className={styles.link} onClick={onLinkClick}>Работы</Link>
            </div>
            <div className={styles.item}>
              <Link href='/contacts' className={styles.link} onClick={onLinkClick}>Контакты</Link>
            </div>
          </div>
          <Button className={styles.btn} bordered onClick={ctx.openModal('callback')}>Связаться с нами</Button>
        </div>
      </div>
      <div className={styles.side}>
        <div className='container'>
          <div className={styles.contacts}>
            <a href={`tel:${contacts.phone}`} className={styles.phone}>{contacts.phone}</a>
            <a href={`mailto:${contacts.email}`} className={styles.mail}>{contacts.email}</a>
            <div className={styles.social}>
              {/* <a href={contacts.whatsapp} className={styles.socialItem} target='_blank' rel='noreferrer'>
                <WhatsappIcon className={styles.socialIcon} />
              </a> */}
              <a href={contacts.social.find(item => item.title === 'vk').href} className={styles.socialItem} target='_blank' rel='noreferrer'>
                <VkIcon className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
