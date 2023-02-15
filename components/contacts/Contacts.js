import cn from 'classnames'
import Button from '../ui/Button'
import ContactForm from '../app/ContactForm'
import Arrow from '/icons/arrow.svg'
import DashedArrow from '/icons/dashed-arrow-2.svg'
import Pin from '/icons/pin.svg'
import contacts from '/data/contacts'
import styles from './Contacts.module.scss'

export default function Contacts() {
  return (
    <section>
      <div className={styles.main}>
        <div className='container'>
          <h1 className={cn('h1', styles.heading)}>Связаться с нами</h1>
          <div className={styles.groups}>
            <div className={styles.group}>
              <p className={styles.address}>
                {contacts.address}
                <a href='/' className={styles.mapLink}>
                  <DashedArrow className={styles.mapLinkArrow} />
                  <Pin className={styles.mapLinkIcon} />
                  Посмотреть на карте
                </a>
              </p>
              <p className={styles.time}>{contacts.time}</p>
              <p className={styles.status}>Сейчас работаем</p>
            </div>
            <div className={styles.group}>
              <a href={`tel:${contacts.phone}`} className={styles.phone}>{contacts.phone}</a>
              <p className={styles.time}>{contacts.time}</p>
              <Button className={styles.btn} size='lg' color='grey' bordered>Перезвоните мне</Button>
            </div>
            <div className={styles.group}>
              <a href={`mailto:${contacts.email}`} className={styles.mail}>{contacts.email}</a>
              <div className={styles.social}>
                {contacts.social.map(item => (
                  <a
                    key={item.title}
                    href={item.href}
                    target='_blank'
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
