import Layout from '../components/layout/Layout'
import { UTMProvider } from '../context/UtmContext'
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <UTMProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UTMProvider>
  )
}
