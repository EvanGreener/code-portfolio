import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import acnhUI from '../assets/acnh-ui.png'
import noImage from '../assets/no-image.jpeg'
import rubixImg from '../assets/rubix_cube.png'
import spotaiImg from '../assets/spotai.png'
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
         title: 'SpotAI',
         image: spotaiImg,
         tags: 'React Tailwind Vite Python Flask Mysql',
         link: 'https://github.com/wboughattas/SpotAI/',
      },
      {
         title: 'Animal Crossing Cheat Sheet',
         image: acnhUI,
         tags: 'React Typescript Material-UI acnhapi Github-Pages',
         link: 'https://evangreener.github.io/ACNH-Creature-Guide/',
      },
      {
         title: 'Rubix Cube',
         image: rubixImg,
         tags: 'Three.JS Vite ES6-Modules',
         link: 'https://github.com/EvanGreener/rubix-cube',
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
            <title>{'Evan Greenstein | Portfolio'}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div
            id="content"
            className="flex flex-col items-center text-white scroll-mt-16"
         >
            {/**
             * About me Section
             *    - picture + description
             */}
            <AboutMe aboutRef={aboutRef} />
            {/**
             * Skills Section
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
