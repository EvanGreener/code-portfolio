import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import profile from '../assets/profile.jpg'

const Home: NextPage = () => {
   return (
      <Layout>
         <Head>
            <title>{"Home Page - Evan Greenstein's Portfolio"}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div
            id="content"
            className="px-10 py-5 space-y-5 flex flex-col items-center text-white"
         >
            <p className="font-bold text-xl decoration-solid underline">
               About me
            </p>

            <div className="w-3/5 sm:w-1/4">
               <Image src={profile} alt="profile pic" layout="responsive" />
            </div>
            <p className="text-justify sm:w-1/3">
               A 3rd year software engineering at Concordia University student
               who&apos;s extremely passionate about programming and
               engineering. Before studying at Concordia, I completed a computer
               science DEC at Dawson College.
            </p>

            <p className="font-bold text-xl decoration-solid underline">
               Experience
            </p>
         </div>
      </Layout>
   )
}

export default Home
