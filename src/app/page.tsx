'use client'
import { RefObject, useEffect, useRef } from 'react'
import Typed from 'typed.js'
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
   tags: string[]
   link: string
}

export default function MainScreen() {
   const introTextEl = useRef(null)
   const subTextEl = useRef(null)

   const aboutRef = useRef(null)
   const skillsRef = useRef(null)
   const projectsRef = useRef(null)

   useEffect(() => {
      const typed = new Typed(introTextEl.current, {
         strings: [
            '<span style="color: white; white-space: pre-line; font-size: 1.25rem">' +
               '<span style="font-size: 1.5rem">&gt;_ </span> <span style=" color: green ;"> whoami </span>^1000\n' +
               'Evan Greenstein\n^500' +
               'Aspiring Software Engineer' +
               '</span>',
         ],
         typeSpeed: 50,
      })

      return () => {
         typed.destroy()
      }
   }, [])

   return (
      <div className="bg-indigo-950 h-full w-full">
         <div className="z-10 h-full w-full flex items-center justify-center space-x-2">
            <div className="bg-black/50 w-2/5 h-2/5 rounded-xl p-4">
               <span ref={introTextEl} className="" />
            </div>
         </div>
      </div>
   )
}
