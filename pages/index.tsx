import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import acnhUI from '../assets/acnh-ui.png'
import noImage from '../assets/no-image.jpeg'
import { RefObject, useRef } from 'react'
import AboutMe from '../components/about'
import Skills from '../components/skills'
import { StaticImageData } from 'next/image'
import Projects from '../components/projects'

export type NavElement = {
   text: string
   href: string
   isMain: boolean
   domRef: RefObject<HTMLParagraphElement>
}

export type Project = {
   title: string
   image: StaticImageData
   tags: string
   link: string
}

const Home: NextPage = () => {
   const aboutRef = useRef<HTMLParagraphElement>(null)
   const skillsRef = useRef<HTMLParagraphElement>(null)
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
         text: 'Skills',
         href: '#skills',
         isMain: false,
         domRef: skillsRef,
      },
      {
         text: 'Projects',
         href: '#projects',
         isMain: false,
         domRef: projectsRef,
      },
   ]

   const projects: Project[] = [
      {
         title: 'Animal Crossing Cheat Sheet (Personal)',
         image: acnhUI,
         tags: 'React Typescript Material-UI acnhapi',
         link: 'https://github.com/EvanGreener/ACNH-Creature-Guide',
      },
      {
         title: 'E-commerce bookstore (Academic)',
         image: noImage,
         tags: 'JSF Java xhtml JPA Arquillian Log4J MySQL',
         link: 'https://github.com/EvanGreener/JSF-e-commerce-site',
      },
   ]
   return (
      <Layout navElements={navElements}>
         <Head>
            <title>{"Evan Greenstein | Portfolio"}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div
            id="content"
            className="px-10 py-5 gap-y-5 flex flex-col items-center text-white scroll-mt-16"
         >
            {/**
             * About me Section
             *    - picture + description
             */}
            <AboutMe aboutRef={aboutRef} />
            {/**
             * Experience Section
             *    - programming languages + frameworks
             */}
            <Skills skillsRef={skillsRef} />
            {/**
             * Projects Section
             *    - Project title + picture + technologies used
             */}
            <Projects projects={projects} projectsRef={projectsRef} />
         </div>
      </Layout>
   )
}

export default Home
