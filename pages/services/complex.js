import Head from 'next/head'
import Service from '../../components/service/Service'

export default function ComplexPage() {
  return (
    <>
      <Head>
        <title>Комплексная реклама</title>
      </Head>
      <Service category='advertisement' type='complex' />
    </>
  )
}
