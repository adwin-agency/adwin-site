import { useContext } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import TelegramIcon from '/icons/telegram.svg'
import ArrowIcon from '/icons/arrow.svg'
import Logo from '/icons/logo-lg.svg'
import AppContext from '../../context/AppContext'
import contacts from '/data/contacts'
import styles from './Footer.module.scss'

export default function Footer() {
  const ctx = useContext(AppContext)

  return (
    <footer className={styles.el}>
      <div className='container'>
        <div className={styles.main}>
          <p className={cn('h3', styles.title)}>
            Хотите обсудить проект?
            <br />
            Напишите нам в <a href={contacts.telegram} target='_blank' className={styles.link}>Telegram <TelegramIcon className={styles.linkIconLg} /></a>
            <br />
            или <button className={cn(styles.link, styles.linkColored)} onClick={ctx.openModal('request')}>оставьте заявку <ArrowIcon className={styles.linkIcon} /></button>
          </p>
          <div className={styles.steps}>
            <p className={styles.step}>1. <br />Созвонимся и обсудим ваш проект</p>
            <p className={styles.step}>2. <br />Дадим первичную оценку объёму работы</p>
            <p className={styles.step}>3. <br />Подготовим коммерческое</p>
          </div>
        </div>
        <div className={styles.side}>
          <Link href='/'>
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <p className={styles.contactTitle}>Заходите</p>
              <div className={styles.contactDesc}>{contacts.address}</div>
            </div>
            <div className={styles.contact}>
              <p className={styles.contactTitle}>Звоните</p>
              <div className={styles.contactDesc}><a href={`tel:${contacts.phone}`}>{contacts.phone}</a></div>
            </div>
            <div className={styles.contact}>
              <p className={styles.contactTitle}>Пишите</p>
              <div className={styles.contactDesc}><a href={`mailto:${contacts.email}`} className={styles.mail}>{contacts.email}</a></div>
            </div>
            <div className={styles.contact}>
              <p className={styles.contactTitle}>Давайте дружить</p>
              <div className={styles.contactDesc}>
                {contacts.social.map(item => (
                  <a key={item.title} href={item.href} className={styles.social} target='_blank'>{item.title}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
