import Head from 'next/head'
import About from '../components/about/About'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Об агентстве</title>
      </Head>
      <About />
    </>
  )
}
