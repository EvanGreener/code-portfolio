'use client'
import { RefObject, useRef } from 'react'
import AboutMe from '../components/about'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Projects from '../components/projects'
import Skills from '../components/skills'

export type NavElement = {
   text: string
   href: string
   isMain: boolean
   domRef: RefObject<HTMLParagraphElement>
}

export type Project = {
   title: string
   imgSrc: string
   tags: string
   link: string
}

export default function MainScreen() {
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
         imgSrc: '/spotai.png',
         tags: 'React Tailwind Vite Python Flask Mysql',
         link: 'https://github.com/wboughattas/SpotAI/',
      },
      {
         title: 'Animal Crossing Cheat Sheet',
         imgSrc: '/acnh-ui.png',
         tags: 'React Typescript Material-UI acnhapi Github-Pages',
         link: 'https://evangreener.github.io/ACNH-Creature-Guide/',
      },
      {
         title: 'Rubix Cube',
         imgSrc: '/rubix_cube.png',
         tags: 'Three.JS Vite ES6-Modules',
         link: 'https://github.com/EvanGreener/rubix-cube',
      },
      {
         title: 'E-commerce bookstore (Academic)',
         imgSrc: '/no-image.jpeg',
         tags: 'JSF Java xhtml JPA Arquillian Log4J MySQL',
         link: 'https://github.com/EvanGreener/JSF-e-commerce-site',
      },
   ]
   return (
      <div className="bg-slate-900">
         <div className="sticky top-0 z-10 ">
            <Navbar navElements={navElements} />
         </div>

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
         <Footer />
      </div>
   )
}
