import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
   return (
      <Layout>
         <Head>
            <title>{"Evan Greenstein's Portfolio"}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
      </Layout>
   )
}

export default Home
