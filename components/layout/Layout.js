import Header from './Header'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
    </>
  )
}
