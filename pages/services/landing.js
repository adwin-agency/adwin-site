import Head from 'next/head'
import Service from '../../components/service/Service'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Лендинги и промо-страницы</title>
      </Head>
      <Service category='development' type='landing' />
    </>
  )
}
