import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import profile from '../assets/profile.jpg'
import acnhUI from '../assets/acnh-ui.png'
import { IconContext } from 'react-icons'
import { FaReact, FaJava, FaPython, FaLinux } from 'react-icons/fa'
import {
   SiJavascript,
   SiMysql,
   SiCsharp,
   SiAndroidstudio,
} from 'react-icons/si'
import { RefObject, useRef } from 'react'

export type NavElement = {
   text: string
   href: string
   isMain: boolean
   domRef: RefObject<HTMLParagraphElement>
}

const Home: NextPage = () => {
   const aboutRef = useRef<HTMLParagraphElement>(null)
   const experienceRef = useRef<HTMLParagraphElement>(null)
   const projectsRef = useRef<HTMLParagraphElement>(null)

   const navElements: NavElement[] = [
      {
         text: 'Evan Greesntein',
         href: '#about',
         isMain: true,
         domRef: aboutRef,
      },
      { text: 'About Me', href: '#about', isMain: false, domRef: aboutRef },
      {
         text: 'Experience',
         href: '#experiece',
         isMain: false,
         domRef: experienceRef,
      },
      {
         text: 'Projects',
         href: '#projects',
         isMain: false,
         domRef: projectsRef,
      },
   ]
   return (
      <Layout navElements={navElements}>
         <Head>
            <title>{"Evan Greenstein's Dev Portfolio"}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div
            id="content"
            ref={aboutRef}
            className="px-10 py-5 gap-y-5 flex flex-col items-center text-white scroll-mt-16"
         >
            {/**
             * About me Section
             *    - picture + description
             */}
            <p className="font-bold text-xl font-mono">About me</p>
            <div className="w-3/5 sm:w-1/4">
               <Image src={profile} alt="profile pic" layout="responsive" />
            </div>
            <p className="sm:w-1/3 font-mono">
               >_ A 3rd year software engineering at Concordia University student
               who&apos;s extremely passionate about programming, computers and
               engineering. Before studying at Concordia, I completed a computer
               science DEC at Dawson College.
            </p>
            {/**
             * Experience Section
             *    - programming languages + frameworks
             */}
            <p ref={experienceRef} className="font-bold font-mono text-xl scroll-mt-16">
               Experience
            </p>
            <IconContext.Provider value={{ size: '4em', color: 'white' }}>
               <div className="flex flex-row flex-wrap justify-center gap-10 sm:w-1/3">
                  <FaReact />
                  <SiJavascript />
                  <FaJava />
                  <SiMysql />
                  <SiCsharp />
                  <FaPython />
                  <FaLinux />
                  <SiAndroidstudio />
               </div>
            </IconContext.Provider>
            {/**
             * Projects Section
             *    - Project title + picture + technologies used
             */}
            <p ref={projectsRef} className="font-bold font-mono text-xl scroll-mt-16">
               Projects I&apos;ve worked on
            </p>
            <div className="flex flex-col items-center gap-y-2">
               <p className="underline text-lg font-mono">
                  Animal Crossing Cheat Sheet (Personal)
               </p>
               <div className="w-3/5 sm:w-2/5 hover:blur-sm">
                  <Image src={acnhUI} alt="Animal crossing project UI" />
               </div>
               <code>React Typescript Material-UI acnhapi</code>
            </div>
         </div>
      </Layout>
   )
}

export default Home
