import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
      <Footer />
    </>
  )
}
