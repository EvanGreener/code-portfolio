'use client'
import { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import Typed from 'typed.js'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
   type Container,
   type ISourceOptions,
   MoveDirection,
   OutMode,
} from '@tsparticles/engine'
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

import AboutMe from '../components/about'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Projects from '../components/projects'
import Skills from '../components/skills'
import { motion, Variants } from 'framer-motion'
import { once } from 'events'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowDownOutline } from 'react-icons/io5'

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

   const aboutRef = useRef(null)
   const skillsRef = useRef(null)
   const projectsRef = useRef(null)

   const [init, setInit] = useState(false)

   useEffect(() => {
      const typed = new Typed(introTextEl.current, {
         strings: [
            '<span style="white-space: pre-line; font-size: 1.25rem">' +
               '<span style="font-size: 1.5rem">&gt;_ </span> <span style=" color: green ;"> whoami </span>^1000\n' +
               '`Evan Greenstein` \n^250 ' +
               '`Aspiring Software Engineer` \n^250 ' +
               '<span style="font-size: 1.5rem">&gt;_ </span>' +
               '</span>',
         ],
         typeSpeed: 50,
      })

      initParticlesEngine(async (engine) => {
         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
         // starting from v2 you can add only the features you need reducing the bundle size
         //await loadAll(engine);
         //await loadFull(engine);
         await loadSlim(engine)
         //await loadBasic(engine);
      }).then(() => {
         setInit(true)
      })

      return () => {
         typed.destroy()
      }
   }, [])

   const particlesLoaded = async (container?: Container): Promise<void> => {
      console.log(container)
   }

   const particleOptions: ISourceOptions = useMemo(
      () => ({
         fpsLimit: 120,
         interactivity: {
            events: {
               onClick: {
                  enable: true,
                  mode: 'push',
               },
               onHover: {
                  enable: true,
                  mode: 'repulse',
               },
            },
            modes: {
               push: {
                  quantity: 4,
               },
               repulse: {
                  distance: 100,
                  duration: 0.4,
               },
            },
         },
         particles: {
            color: {
               value: '#ffffff',
            },
            links: {
               color: '#ffffff',
               distance: 150,
               enable: true,
               opacity: 0.5,
               width: 1,
            },
            move: {
               direction: MoveDirection.none,
               enable: true,
               outModes: {
                  default: OutMode.out,
               },
               random: false,
               speed: 3,
               straight: false,
            },
            number: {
               density: {
                  enable: true,
               },
               value: 120,
            },
            opacity: {
               value: 0.5,
            },
            shape: {
               type: 'circle',
            },
            size: {
               value: { min: 1, max: 5 },
               random: true,
            },
         },
         detectRetina: true,
      }),
      []
   )

   const sectionAOS: Variants = {
      offScreenRight: {
         x: 100,
         opacity: 0,
      },
      offScreenLeft: {
         x: -100,
         opacity: 0,
      },
      onScreen: {
         x: 0,
         opacity: 1,
         transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
         },
      },
   }

   const technologies: { imgSrc: string; ref: string }[] = [
      {
         imgSrc: 'https://www.svgrepo.com/show/355190/reactjs.svg',
         ref: 'https://react.dev/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/448236/linux.svg',
         ref: 'https://en.wikipedia.org/wiki/Linux',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/353925/javascript.svg',
         ref: 'https://simple.wikipedia.org/wiki/JavaScript',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/378440/nextjs-fill.svg',
         ref: 'https://nextjs.org/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/452234/java.svg',
         ref: 'https://www.java.com/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/452192/docker.svg',
         ref: 'https://www.docker.com/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/512317/github-142.svg',
         ref: 'https://github.com/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/452184/csharp.svg',
         ref: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/452210/git.svg',
         ref: 'https://git-scm.com/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/452091/python.svg',
         ref: 'https://www.python.org/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
         ref: 'https://www.typescriptlang.org/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/373595/firebase.svg',
         ref: 'https://firebase.google.com/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/354200/postgresql.svg',
         ref: 'https://www.postgresql.org/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/373701/jest-snapshot.svg',
         ref: 'https://jestjs.io/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/452156/angular.svg',
         ref: 'https://angularjs.org/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/373542/cypress.svg',
         ref: 'https://www.cypress.io/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/330398/express.svg',
         ref: 'https://expressjs.com/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/452241/jira.svg',
         ref: 'https://www.atlassian.com/software/jira',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/374118/tailwind.svg',
         ref: 'https://tailwindcss.com/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/331488/mongodb.svg',
         ref: 'https://www.mongodb.com/',
      },
      {
         imgSrc: 'https://www.svgrepo.com/show/448266/aws.svg',
         ref: 'https://www.svgrepo.com/show/448266/aws.svg',
      },
   ]

   return (
      <div className="bg-indigo-950 h-full w-full">
         {init && (
            <Particles
               id="tsparticles"
               particlesLoaded={particlesLoaded}
               options={particleOptions}
            />
         )}
         {/* 
            Intro section 
            =======================
         */}
         <div className="z-10 h-full w-full flex flex-col items-center justify-center space-y-10">
            <div className="w-2/5 h-2/5">
               <div className="bg-slate-300 rounded-t-xl p-2"></div>
               <div className="bg-black/50 h-full rounded-b-xl p-4">
                  <span ref={introTextEl} />
               </div>
            </div>

            <div className="flex space-x-10">
               <Link href={'https://github.com/EvanGreener'}>
                  <Image
                     src={'https://www.svgrepo.com/show/512317/github-142.svg'}
                     height={100}
                     width={100}
                     alt="GitHub"
                  />
               </Link>
               <Link href={'https://www.linkedin.com/in/evan-greenstein/'}>
                  <Image
                     src={'https://www.svgrepo.com/show/448234/linkedin.svg'}
                     height={100}
                     width={100}
                     alt="LinkedIn"
                  />
               </Link>
            </div>
            <div className="relative flex">
               <IoArrowDownOutline
                  color="white"
                  size={50}
                  className="animate-ping absolute inline-flex opacity-75"
               />
               <IoArrowDownOutline
                  color="white"
                  size={50}
                  className="relative inline-flex"
               />
            </div>
         </div>
         {/* 
            About me section
            =======================
         */}
         <div className="bg-indigo-700 w-full p-10">
            <motion.div
               initial="offScreenLeft"
               whileInView="onScreen"
               viewport={{ once: true, amount: 0.8 }}
               className="flex flex-col items-center space-y-2"
               variants={sectionAOS}
            >
               <p className="text-4xl">About me</p>
               <Image
                  src={'/profile.jpg'}
                  width={400}
                  height={400}
                  alt="profile pic"
                  className="rounded-full"
               />
               <p className="w-2/5 indent-8 text-justify">
                  {`As a passionate student pursuing Software 
               Engineering at Concordia University, coupled with my prior 
               studies in Computer Science at Dawson College, I am deeply 
               immersed in the world of technology.`}
               </p>
               <p className="w-2/5 indent-8 text-justify">
                  {`With a keen eye for detail and a love for problem-solving, I have found my niche 
               in full-stack web development. From crafting intuitive user interfaces 
               to architecting robust backend systems, I enjoy the balance of 
               creativity and functionality. `}
               </p>
               <p className="w-2/5 indent-8 text-justify">
                  {`Currently honing my skills at 
               Concordia University, I eagerly anticipate the opportunity 
               to apply my knowledge and passion to real-world projects. 
               I am driven by a desire to continuously learn and grow, 
               exploring emerging technologies and embracing new challenges
               with enthusiasm.`}
               </p>
               <p className="w-2/5 indent-8 text-justify">
                  {`I am always open to connecting with like-minded 
               individuals, discussing innovative ideas, and collaborating 
               on projects that push the boundaries of what technology 
               can achieve. Let's connect and explore the endless 
               possibilities together`}
               </p>
            </motion.div>
         </div>
         {/* 
            Technologies section
            =======================
         */}
         <div className="bg-indigo-950 h-full w-full p-10">
            <motion.div
               initial="offScreenRight"
               whileInView="onScreen"
               viewport={{ once: true, amount: 0.8 }}
               className="flex flex-col items-center space-y-10"
               variants={sectionAOS}
            >
               <p className="text-4xl">Technologies</p>
               <div className="w-3/5 flex flex-wrap gap-4 items-center">
                  {technologies.map((tech) => {
                     const { imgSrc, ref } = tech
                     return (
                        <div
                           key={imgSrc}
                           className="bg-white/75 rounded-xl p-4"
                        >
                           <Link href={ref} target="_blank">
                              <Image
                                 src={imgSrc}
                                 height={50}
                                 width={50}
                                 alt="tech"
                              />
                           </Link>
                        </div>
                     )
                  })}
               </div>
            </motion.div>
         </div>
      </div>
   )
}
