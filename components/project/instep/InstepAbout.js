import styles from './InstepAbout.module.scss'

export default function InstepAbout() {
  return (
    <section className={styles.el}>
      <div className="container">
        <img className={styles.logo} src="/images/projects/instep/about-logo.svg" alt="" />
        <div className={styles.top}>
          <h2 className='h3'>Лендинг, как первый шаг к организации продаж</h2>
          <p className={styles.desc}>К нам обратилась небольшая частная компания, занимающаяся разработкой протезов и помощью ампутантам.</p>
          <img className={styles.arrow} src="/images/projects/instep/about-arrow.svg" alt="" />
        </div>
        <img className={styles.screen} src="/images/projects/instep/about-screen.png" alt="" />
        <img className={styles.stars} src="/images/projects/instep/about-stars.svg" alt="" />
      </div>
    </section>
  )
}
