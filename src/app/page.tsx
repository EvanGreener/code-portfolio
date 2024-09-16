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

import { motion, Variants } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { IoArrowDownOutline } from 'react-icons/io5'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import addBird from '../../public/bb/add-bird.png'
import birdpediaEntry from '../../public/bb/birdpedia-entry.png'
import birdpedia from '../../public/bb/birdpedia.png'
import home from '../../public/bb/home.png'
import leaderboard from '../../public/bb/leaderboard.png'

import account from '../../public/tw/account.png'
import loginEmail from '../../public/tw/login-email.png'
import login from '../../public/tw/login.png'
import tripCalendar from '../../public/tw/trip-calendar.png'
import tripPlanner from '../../public/tw/trip-planner.png'

import noImage from '../../public/no-image.jpeg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TfiDownload } from 'react-icons/tfi'
import { MdEmail } from 'react-icons/md'

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
   const [readMore, setReadMore] = useState(false)
   const [navIndicatorX, setNavIndicatorX] = useState(0)

   useEffect(() => {
      const typed = new Typed(introTextEl.current, {
         strings: [
            '<span style="white-space: pre-line; font-size: 1.25rem">' +
               '<span style="font-size: 1.5rem">&gt;_ </span> <span style=" color: green ;"> whoami </span>^1000\n' +
               '`✅ Evan Greenstein` \n^250 ' +
               '`✅ Aspiring Software Engineer` \n^250 ' +
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
                  enable: false,
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
               value: 200,
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
   const aboutMeParagraphs = [
      `As a passionate student pursuing Software 
      Engineering at Concordia University, coupled with my prior 
      studies in Computer Science at Dawson College, I am deeply 
      immersed in the world of technology.`,

      `With a keen eye for detail and a love for problem-solving, I have found my niche 
      in full-stack web development. From crafting intuitive user interfaces 
      to architecting robust backend systems, I enjoy the balance of 
      creativity and functionality. `,

      `Currently honing my skills at 
      Concordia University, I eagerly anticipate the opportunity 
      to apply my knowledge and passion to real-world projects. 
      I am driven by a desire to continuously learn and grow, 
      exploring emerging technologies and embracing new challenges
      with enthusiasm.`,

      `I am always open to connecting with like-minded 
      individuals, discussing innovative ideas, and collaborating 
      on projects that push the boundaries of what technology 
      can achieve. Let's connect and explore the endless 
      possibilities together`,
   ]

   const mySkills: { imgSrc: string; ref: string }[] = [
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
         ref: 'https://aws.amazon.com/',
      },
      {
         imgSrc:
            'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
         ref: 'https://rxjs.dev/',
      },
   ]

   const projects: {
      title: string
      desc: string
      github: string
      tags: string[]
      imgSrcs?: StaticImageData[]
      ref?: string
   }[] = [
      {
         title: 'Backyard buddiez (solo project)',
         desc: `A bird tracking app/game for everyone! Made with Next.js and Supabase. Use an app like Merlin to 
         identify a bird you've spotted, then enter the name of the bird you've IDd and the app will automatically a
         dd your sighting. The app will let you know if your Birdpedia gained a new entry! 
         Look back on all the previous birds you've IDd. Click on one get information and various statistics on it!
         By identifying birds and completing the daily challenges, you earn points. You get 500 points for each new 
         bird you ID and 100 points for every daily challenge you complete. See how you stack up against your friends and the world!
         When you ID a bird, if your sighting fit one or more of the daily challenges you can check off those challenges 
         before adding your sighting! Your daily challenge progress will updated and shown on the home screen!`,
         github: 'https://github.com/EvanGreener/backyard-buddiez',
         tags: [
            'Next.js',
            'Supabase',
            'PostgreSQL',
            'drizzle-orm',
            'React',
            'SPARQL',
         ],
         imgSrcs: [home, leaderboard, addBird, birdpedia, birdpediaEntry],
         ref: 'https://backyard-buddiez.vercel.app/',
      },
      {
         title: 'TripWise',
         desc: `A web and mobile application that recommends activities and 
         restaurants based on your interests. Once the app generates the recommended
         restaurants/activites, the app displays a calendar which shows when to go to
         each activity. The user can also click on any entry in the calendar to open
         Google Maps to see the location. Before the app generates recommendations,
         the app accesses your Google calandar (if you signed in with Google) to
         ensure that the generated activities don't conflict with other 
         appointments/events`,
         github: 'https://github.com/mattmazzone/engr-490',
         tags: ['React Native', 'Expo', 'Firebase', 'Python', 'Google APIs'],
         imgSrcs: [login, loginEmail, tripPlanner, tripCalendar, account],
      },
   ]

   const responsive = {
      superLargeDesktop: {
         breakpoint: { max: 3000, min: 4000 },
         items: 2,
      },
      mobileDesktop: {
         breakpoint: { max: 3000, min: 0 },
         items: 1,
      },
   }

   const navBarLinks: { href: string; section: string }[] = [
      { href: '#intro', section: 'Intro' },
      { href: '#aboutme', section: 'About' },
      { href: '#skills', section: 'Skills' },
      { href: '#projects', section: 'Projects' },
   ]

   return (
      <div className="bg-indigo-950 w-full p-4 overscroll-contain overflow-hidden">
         {init && (
            <Particles
               id="tsparticles"
               particlesLoaded={particlesLoaded}
               options={particleOptions}
            />
         )}
         {/* 
            Navbar 
            =======================
         */}
         <div
            className="z-10 fixed top-8 left-0 right-0 text-black w-full flex justify-center"
            style={{ paddingLeft: 'inherit', paddingRight: 'inherit' }}
         >
            <div className="rounded-full bg-white/75 flex gap-2 justify-evenly p-21 w-[325px] xl:w-1/4">
               {navBarLinks.map((link) => {
                  const { href, section } = link
                  return (
                     <Link
                        key={href}
                        href={`/${href}`}
                        className="rounded-full p-2 transition ease-in-out duration-300 hover:bg-slate-200 active:bg-slate-400"
                     >
                        {section}
                     </Link>
                  )
               })}
            </div>
         </div>
         {/* 
            Intro section 
            =======================
         */}
         <div
            id="intro"
            className="h-screen w-full flex flex-col items-center justify-end space-y-10 pb-10"
         >
            <div className="w-full xl:w-3/5 h-1/2">
               <div className="bg-slate-300 rounded-t-xl p-2"></div>
               <div className="bg-black/50 h-full rounded-b-xl p-4">
                  <span ref={introTextEl} />
               </div>
            </div>

            <div className="flex space-x-10 items-center">
               <Link href={'https://github.com/EvanGreener'}>
                  <Image
                     src={'https://www.svgrepo.com/show/512317/github-142.svg'}
                     height={50}
                     width={50}
                     alt="GitHub"
                  />
               </Link>
               <Link href={'https://www.linkedin.com/in/evan-greenstein/'}>
                  <Image
                     src={'https://www.svgrepo.com/show/448234/linkedin.svg'}
                     height={50}
                     width={50}
                     alt="LinkedIn"
                  />
               </Link>
               <Link href={'/Evan_Greenstein_CV.pdf'} target="_blank">
                  <TfiDownload size={40} />
               </Link>
               <Link href={'mailto:evanlg16@gmail.com'}>
                  <MdEmail size={50} />
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
         <div id="aboutme" className="w-full">
            <motion.div
               initial="offScreenLeft"
               whileInView="onScreen"
               viewport={{ once: true, amount: 0.4 }}
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
               {readMore ? (
                  <>
                     {aboutMeParagraphs.map((para) => {
                        return (
                           <p
                              key={para.slice(16)}
                              className="w-full xl:w-2/5 indent-8 text-justify"
                           >
                              {para}
                           </p>
                        )
                     })}
                     <p
                        className="hover:underline"
                        onClick={() => setReadMore(false)}
                     >
                        Show less ...
                     </p>
                  </>
               ) : (
                  <>
                     <p
                        key={aboutMeParagraphs[0].slice(16)}
                        className="w-full xl:w-2/5 indent-8 text-justify"
                     >
                        {aboutMeParagraphs[0]}
                     </p>
                     <p
                        className="hover:underline"
                        onClick={() => setReadMore(true)}
                     >
                        Read More ...
                     </p>
                  </>
               )}
            </motion.div>
         </div>
         {/* 
            Skills section
            =======================
         */}
         <div id="skills" className="w-full mt-10">
            <motion.div
               initial="offScreenRight"
               whileInView="onScreen"
               viewport={{ once: true, amount: 0.2 }}
               className="flex flex-col items-center space-y-10"
               variants={sectionAOS}
            >
               <p className="text-4xl">Skills</p>
               <div className=" w-full xl:w-3/5 flex flex-wrap gap-4 justify-center items-center">
                  {mySkills.map((tech) => {
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
         {/* 
            Projects section
            =======================
         */}
         <div
            id="projects"
            className=" w-full flex flex-col items-center space-y-8 mt-10"
         >
            <p className="text-4xl">Projects</p>
            {projects.map((proj) => {
               const { title, desc, github, tags, imgSrcs, ref } = proj

               return (
                  <motion.div
                     key={title}
                     initial="offScreenLeft"
                     whileInView="onScreen"
                     viewport={{ once: true, amount: 0.4 }}
                     className="bg-white/75 p-4 rounded-xl w-full xl:w-3/5 h-[36rem]"
                     variants={sectionAOS}
                  >
                     <div className="flex text-black h-full space-x-4">
                        <div className="flex flex-col w-full md:w-1/2 space-y-4">
                           <p className="text-lg font-bold">{title}</p>
                           <p className="text-justify indent-8 overflow-auto">
                              {desc}
                           </p>
                           <p>
                              <span className="flex flex-wrap gap-2">
                                 <span className="p-2">Tags:</span>
                                 {tags.map((tag) => {
                                    return (
                                       <span
                                          key={tag}
                                          className="bg-slate-200/75 rounded-xl p-2"
                                       >
                                          {tag}
                                       </span>
                                    )
                                 })}
                              </span>
                           </p>
                           <div className="flex gap-8 items-center">
                              <Link
                                 href={github}
                                 className="bg-slate-200/75 border-2 border-black rounded-xl flex p-2 gap-2 items-center"
                                 target="_blank"
                              >
                                 <Image
                                    src={
                                       'https://www.svgrepo.com/show/512317/github-142.svg'
                                    }
                                    alt="Github repo"
                                    width={25}
                                    height={25}
                                 />
                                 <span>GitHub Repo</span>
                              </Link>
                              {ref && (
                                 <Link
                                    href={ref}
                                    className="bg-slate-200/75 border-2 border-black rounded-xl flex p-2 gap-2 items-center"
                                    target="_blank"
                                 >
                                    <span>Live</span>
                                 </Link>
                              )}
                           </div>
                        </div>
                        <div className="hidden md:block w-1/2 p-2 rouneded-xl h-full relative">
                           <Carousel
                              showDots={true}
                              responsive={responsive}
                              containerClass="carousel-container"
                              sliderClass="carousel-track"
                           >
                              {imgSrcs !== undefined ? (
                                 imgSrcs.map((src) => {
                                    return (
                                       <Image
                                          key={src.src}
                                          src={src}
                                          alt="project img"
                                          sizes="33vw"
                                          fill
                                          style={{ objectFit: 'contain' }}
                                       />
                                    )
                                 })
                              ) : (
                                 <Image src={noImage} alt="project img" />
                              )}
                           </Carousel>
                        </div>
                     </div>
                  </motion.div>
               )
            })}
         </div>
      </div>
   )
}
