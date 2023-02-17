import cn from 'classnames'
import TelegramIcon from '/icons/telegram.svg'
import ArrowIcon from '/icons/arrow.svg'
import Logo from '/icons/logo-lg.svg'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.el}>
      <div className='container'>
        <div className={styles.main}>
          <p className={cn('h3', styles.title)}>
            Хотите обсудить проект? 
            <br />
            Напишите нам в <a href='#' className={styles.link}>Telegram <TelegramIcon className={styles.linkIconLg} /></a>
            <br />
            или <a href='#' className={cn(styles.link, styles.linkColored)}>оставьте заявку <ArrowIcon className={styles.linkIcon} /></a>
          </p>
          <div className={styles.steps}>
            <p className={styles.step}>1. <br />Созвонимся и обсудим ваш проект</p>
            <p className={styles.step}>2. <br />Дадим первичную оценку объёму работы</p>
            <p className={styles.step}>3. <br />Подготовим коммерческое</p>
          </div>
        </div>
        <div className={styles.side}>
          <Logo className={styles.logo} />
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <p className={styles.contactTitle}>Заходите</p>
              <div className={styles.contactDesc}>СПб, ул. Новорощинская, д. 4, оф.&nbsp;1117-2</div>
            </div>
            <div className={styles.contact}>
              <p className={styles.contactTitle}>Звоните</p>
              <div className={styles.contactDesc}><a href='tel:+7 (999) 999 - 99 - 99'>+7 (999) 999 - 99 - 99</a></div>
            </div>
            <div className={styles.contact}>
              <p className={styles.contactTitle}>Пишите</p>
              <div className={styles.contactDesc}><a href='mailto:sample@sample.com' className={styles.mail}>sample@sample.com</a></div>
            </div>
            <div className={styles.contact}>
              <p className={styles.contactTitle}>Давайте дружить</p>
              <div className={styles.contactDesc}><a href='' className={styles.social}>vk</a><a href='' className={styles.social}>behance</a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
