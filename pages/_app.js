import { Provider } from 'react-redux'
import Layout from '../components/layout/Layout'
import store from '../store'
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
