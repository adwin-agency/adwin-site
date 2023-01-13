import cn from 'classnames'
import Button from '../app/Button'
import TelegramIcon from '/public/icons/telegram.svg'
import VkIcon from '/public/icons/vk.svg'
import WhatsappIcon from '/public/icons/whatsapp.svg'
import styles from './MobileMenu.module.scss'

export default function MobileMenu({ className }) {
  return (
    <div className={cn(styles.el, className)}>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.menu}>
            <div className={styles.item}>
              <a href='/' className={styles.link}>Об агентстве</a>
            </div>
            <div className={styles.item}>
              <a href='/' className={styles.link}>Услуги</a>
              <div className={styles.submenu}>
                <div className={styles.subgroup}>
                  <a href='/' className={styles.sublink}>Лендинги</a>
                  <a href='/' className={styles.sublink}>Корпоративные сайты</a>
                  <a href='/' className={styles.sublink}>Интернет-магазины</a>
                </div>
                <div className={styles.subgroup}>
                  <a href='/' className={styles.sublink}>Комплексная реклама</a>
                  <a href='/' className={styles.sublink}>Контекстная реклама</a>
                  <a href='/' className={styles.sublink}>Таргетированная реклама</a>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <a href='/' className={styles.link}>Работы</a>
            </div>
            <div className={styles.item}>
              <a href='/' className={styles.link}>Контакты</a>
            </div>
          </div>
          <Button className={styles.btn} bordered>Связаться с нами</Button>
        </div>
      </div>
      <div className={styles.side}>
        <div className="container">
          <div className={styles.contacts}>
            <a href='tel:+7 (812) 999 99 99' className={styles.phone}>+7 (812) 999 99 99</a>
            <a href='mailto:sample@sample.com' className={styles.mail}>sample@sample.com</a>
            <div className={styles.social}>
              <a href='/' className={styles.socialItem}>
                <TelegramIcon className={styles.socialIcon} />
              </a>
              <a href='/' className={styles.socialItem}>
                <VkIcon className={styles.socialIcon} />
              </a>
              <a href='/' className={styles.socialItem}>
                <WhatsappIcon className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
