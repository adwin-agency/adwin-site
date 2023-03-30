import cn from 'classnames'
import Stats from '../app/Stats'
import Button from '../ui/Button'
import useAnim from '../../helpers/useAnim'
import styles from './BrieflyAbout.module.scss'

export default function BrieflyAbout({ className }) {
  const { anim, animRef } = useAnim()

  return (
    <section className={cn(className, styles.el, { [styles.anim]: anim })} ref={animRef}>
      <div className='container'>
        <div className={styles.main}>
          <h2 className={cn('h2', styles.heading)}>Кратко про нас</h2>
          <div className={styles.info}>
            <div className={styles.awards}>
              <div className={styles.cert}>
                <img src='/images/about/yandex-cert.png' alt='Яндекс сертификат' className={styles.image} />
              </div>
              <div className={styles.signs}>
                <img src='/images/about/sign-vk.svg' alt='' className={styles.sign} />
                <img src='/images/about/sign-runet.svg' alt='' className={styles.sign} />
                <img src='/images/about/sign-target.svg' alt='' className={styles.sign} />
                <img src='/images/about/sign-mail.svg' alt='' className={styles.sign} />
                <img src='/images/about/sign-timeweb.svg' alt='' className={styles.sign} />
              </div>
            </div>
            <div className={styles.stats}>
              <Stats />
            </div>
          </div>
          <div className={styles.actions}>
            <Button className={styles.btn} link='/about' size='textlg' color='grey' bordered>Узнать больше</Button>
          </div>
        </div>
      </div>
    </section>
  )
}