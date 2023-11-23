import { useContext } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import WhatsappIcon from '/icons/whatsapp-line.svg'
import ArrowIcon from '/icons/arrow.svg'
import Logo from '/icons/logo-lg.svg'
import AppContext from '../../context/AppContext'
import contacts from '/data/contacts'
import styles from './Footer.module.scss'

export default function Footer({ className }) {
  const ctx = useContext(AppContext)

  return (
    <footer className={cn(className, styles.el)}>
      <div className='container'>
        <div className={styles.main}>
          <p className={cn('h3', styles.title)}>
            Хотите обсудить проект?
            {/* <br /> */}
            {/* Напишите нам в <a href={contacts.telegram} target='_blank' rel='noreferrer' className={styles.link}>Whatsapp <WhatsappIcon className={styles.linkIconLg} /></a> */}
            <br />
            {/* или  */} <button className={cn(styles.link, styles.linkColored)} onClick={ctx.openModal('request')}>оставьте заявку <ArrowIcon className={styles.linkIcon} /></button>
          </p>
          <div className={styles.steps}>
            <p className={styles.step}>1. <br />Созвонимся и обсудим ваш проект</p>
            <p className={styles.step}>2. <br />Дадим первичную оценку объёму работы</p>
            <p className={styles.step}>3. <br />Подготовим коммерческое</p>
          </div>
        </div>
        <div className={styles.side}>
          <div>
            <Link href='/'>
              <Logo className={styles.logo} />
            </Link>
            <div className={styles.info}>
              <p>ООО "Бизнес- Решения"</p>
              <p>ИНН: 7810894983</p>
              <p>ОГРН: 1129847004880</p>
            </div>
            <a href="#" target='_blank' className={styles.policy}>Политика конфиденциальности</a>
          </div>
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
                  <a key={item.title} href={item.href} className={styles.social} target='_blank' rel='noreferrer'>{item.title}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
    </footer >
  )
}
