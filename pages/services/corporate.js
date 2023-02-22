import Head from 'next/head'
import Service from '../../components/service/Service'

export default function CorporatePage() {
  return (
    <>
      <Head>
        <title>Корпоративные сайты</title>
      </Head>
      <Service category='development' type='corporate' />
    </>
  )
}
