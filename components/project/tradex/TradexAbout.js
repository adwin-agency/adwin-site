import Logo from '/icons/tardex/logo.svg'
import styles from './TradexAbout.module.scss'

export default function TradexAbout() {
  return (
    <section>
      <div className="container">
        <Logo className={styles.logo} />
      </div>
    </section>
  )
}
