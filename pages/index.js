import Head from 'next/head'
import Home from '../components/index/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Home />
    </>
  )
}
