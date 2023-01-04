import Layout from '../components/Layout'
import '../styles/globals.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <Layout>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}
