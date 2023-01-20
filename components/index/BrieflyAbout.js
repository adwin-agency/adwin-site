import cn from 'classnames'
import Stats from '../app/Stats'
import Button from '../ui/Button'
import styles from './BrieflyAbout.module.scss'

export default function BrieflyAbout({ className }) {
  return (
    <section className={className}>
      <div className='container'>
        <div className={styles.main}>
          <h2 className={cn('h2', styles.heading)}>Кратко про нас</h2>
          <div className={styles.info}>
            <div className={styles.awards}>
              <div className={styles.cert}>
                <img src='/images/about/yandex-cert.png' alt='Яндекс сертификат' className={styles.image} />
              </div>
              <div className={styles.signs}>
                <img src='/images/about/sign-vk.png' alt='' className={styles.sign} />
                <img src='/images/about/sign-runet.png' alt='' className={styles.sign} />
                <img src='/images/about/sign-rating.png' alt='' className={styles.sign} />
                <img src='/images/about/sign-mail.png' alt='' className={styles.sign} />
                <img src='/images/about/sign-timeweb.png' alt='' className={styles.sign} />
                <img src='/images/about/sign-more.png' alt='' className={styles.sign} />
              </div>
            </div>
            <div className={styles.stats}>
              <Stats />
            </div>
          </div>
          <Button className={styles.btn} size='textlg' color='grey' bordered>Узнать больше о нас</Button>
        </div>
      </div>
    </section>
  )
}