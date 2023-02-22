import { useContext } from 'react'
import cn from 'classnames'
import AppContext from '../../context/AppContext'
import Button from '../ui/Button'
import ContactForm from '../app/ContactForm'
import Arrow from '/icons/arrow.svg'
import DashedArrow from '/icons/dashed-arrow-2.svg'
import Pin from '/icons/pin.svg'
import contacts from '/data/contacts'
import styles from './Contacts.module.scss'

export default function Contacts() {
  let status = {
    ok: true,
    title: 'Сейчас работаем'
  }

  const date = new Date()
  const day = date.getDay()
  const hours = date.getHours()

  if (day < 1 || day > 5 || hours < 9 || hours > 17) {
    status = {
      ok: false,
      title: 'В офисе никого нет'
    }
  }

  const ctx = useContext(AppContext)

  return (
    <section>
      <div className={styles.main}>
        <div className='container'>
          <h1 className={cn('h1', styles.heading)}>Связаться с нами</h1>
          <div className={styles.groups}>
            <div className={styles.group}>
              <p className={styles.address}>
                {contacts.address}
                <a href='https://yandex.ru/maps/-/CCUGiPxRlC' target='_blank' rel='noreferrer' className={styles.mapLink}>
                  <DashedArrow className={styles.mapLinkArrow} />
                  <Pin className={styles.mapLinkIcon} />
                  Посмотреть на карте
                </a>
              </p>
              <p className={styles.time}>{contacts.time}</p>
              <p className={cn(styles.status, { [styles.ok]: status.ok })}>{status.title}</p>
            </div>
            <div className={styles.group}>
              <a href={`tel:${contacts.phone}`} className={styles.phone}>{contacts.phone}</a>
              <p className={styles.time}>{contacts.time}</p>
              <Button className={styles.btn} size='lg' color='grey' bordered onClick={ctx.openModal('callback')}>Перезвоните мне</Button>
            </div>
            <div className={styles.group}>
              <a href={`mailto:${contacts.email}`} className={styles.mail}>{contacts.email}</a>
              <div className={styles.social}>
                {contacts.social.map(item => (
                  <a
                    key={item.title}
                    href={item.href}
                    target='_blank'
                    rel='noreferrer'
                    className={styles.socialLink}
                  >
                    {item.title}
                    <Arrow className={styles.socialArrow} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  )
}
