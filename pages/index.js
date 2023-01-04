import Head from 'next/head'
import Socials from '../components/Socials'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Heading from '../components/Heading'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();
    if (!data) {
      return {
        notFound: true
      }
    }
    return {
      props: {
        socials: data
      }
    };
  } catch {
    return {
      props: { socials: null }
    }
  }


}

export default function Home({ socials }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home page" />
      <Socials socials={socials} />
    </div>
  )
}
