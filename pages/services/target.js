import Head from 'next/head'
import Service from '../../components/service/Service'

export default function TargetPage() {
  return (
    <>
      <Head>
        <title>Таргетированная реклама</title>
      </Head>
      <Service category='advertisement' type='target' />
    </>
  )
}
