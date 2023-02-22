import Head from 'next/head'
import Contacts from '../components/contacts/Contacts'

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Связаться с нами</title>
      </Head>
      <Contacts />
    </>
  )
}
