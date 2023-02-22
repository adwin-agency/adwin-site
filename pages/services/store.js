import Head from 'next/head'
import Service from '../../components/service/Service'

export default function StorePage() {
  return (
    <>
      <Head>
        <title>Интернет-магазин</title>
      </Head>
      <Service category='development' type='store' />
    </>
  )
}
