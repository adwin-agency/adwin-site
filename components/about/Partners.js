import styles from './Partners.module.scss'

export default function Partners() {
  return (
    <section className={styles.el}>
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