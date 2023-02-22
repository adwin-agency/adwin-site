import Head from 'next/head'
import Service from '../../components/service/Service'

export default function ContextPage() {
  return (
    <>
      <Head>
        <title>Контекстная реклама</title>
      </Head>
      <Service category='advertisement' type='context' />
    </>
  )
}
