import cn from 'classnames'
import useAnim from '../../helpers/useAnim'
import styles from './Partners.module.scss'

export default function Partners() {
  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} ref={animRef}>
      <h1 className={styles.heading}>Сертифицированный <br />партнёр Яндекса <br /><span className={styles.em}>с 2018 года</span></h1>
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
    </section>
  )
}