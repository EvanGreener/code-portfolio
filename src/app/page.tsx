'use client'
import {
   LegacyRef,
   MutableRefObject,
   RefAttributes,
   RefObject,
   useEffect,
   useMemo,
   useRef,
   useState,
} from 'react'
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

import noImage from '../../public/no-image.jpeg'
import { TfiDownload } from 'react-icons/tfi'
import { MdEmail } from 'react-icons/md'

import projects from '@/content/projects'
import skills from '@/content/skills'
import aboutMeParagraphs from '@/content/aboutMe'

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

   const [init, setInit] = useState(false)
   const [readMore, setReadMore] = useState(false)

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
         background: {
            color: '#1e1b4b',
         },
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

   const introRef: LegacyRef<HTMLDivElement> | null = useRef(null)
   const aboutMeRef: LegacyRef<HTMLDivElement> | null = useRef(null)
   const skillsRef: LegacyRef<HTMLDivElement> | null = useRef(null)
   const projectsRef: LegacyRef<HTMLDivElement> | null = useRef(null)

   const navBarLinks: {
      href: string
      section: string
      ref: LegacyRef<HTMLDivElement> | null
   }[] = [
      { href: '#intro', section: 'Intro', ref: introRef },
      { href: '#aboutme', section: 'About', ref: aboutMeRef },
      { href: '#skills', section: 'Skills', ref: skillsRef },
      { href: '#projects', section: 'Projects', ref: projectsRef },
   ]

   const addClasesToRef = (ref: RefObject<HTMLDivElement>) => {
      ref != null &&
         !ref.current?.classList.contains('bg-slate-300') &&
         ref.current?.classList.toggle('bg-slate-300')
   }

   const removeClassesFromRef = (ref: RefObject<HTMLDivElement>) => {
      ref != null &&
         ref.current?.classList.contains('bg-slate-300') &&
         ref.current?.classList.toggle('bg-slate-300')
   }

   return (
      <>
         {init && (
            <Particles
               id="tsparticles"
               particlesLoaded={particlesLoaded}
               options={particleOptions}
            />
         )}
         <div className="z-10 bg-indigo-950/0 w-full p-4 overscroll-contain overflow-hidden">
            {/* 
            Navbar 
            =======================
         */}
            <div
               className="z-10 fixed top-8 left-0 right-0 text-black w-full flex justify-center "
               style={{ paddingLeft: 'inherit', paddingRight: 'inherit' }}
            >
               <div className="rounded-full bg-white/75 flex gap-2 justify-evenly  w-[325px] xl:w-1/4">
                  {navBarLinks.map((link) => {
                     const { href, section, ref } = link
                     return ref ? (
                        <Link key={href} href={`/${href}`}>
                           <div
                              ref={ref}
                              className="rounded-full p-2 transition ease-in-out duration-300 hover:bg-slate-200 active:bg-slate-400"
                           >
                              {section}
                           </div>
                        </Link>
                     ) : (
                        <></>
                     )
                  })}
               </div>
            </div>
            {/* 
            Intro section 
            =======================
         */}
            <motion.div
               onViewportEnter={() => {
                  removeClassesFromRef(aboutMeRef)
                  addClasesToRef(introRef)
               }}
               onViewportLeave={() => {
                  removeClassesFromRef(introRef)
               }}
            >
               <div
                  id="intro"
                  className="h-screen w-full flex flex-col items-center justify-end space-y-10 pb-10"
               >
                  <div className="w-full xl:w-3/5 h-1/2">
                     <div className="bg-slate-300 rounded-t-xl p-2"></div>
                     <div className="bg-black h-full rounded-b-xl p-4">
                        <span ref={introTextEl} />
                     </div>
                  </div>

                  <div className="flex space-x-10 items-center">
                     <Link href={'https://github.com/EvanGreener'}>
                        <Image
                           src={
                              'https://www.svgrepo.com/show/512317/github-142.svg'
                           }
                           height={50}
                           width={50}
                           alt="GitHub"
                        />
                     </Link>
                     <Link
                        href={'https://www.linkedin.com/in/evan-greenstein/'}
                     >
                        <Image
                           src={
                              'https://www.svgrepo.com/show/448234/linkedin.svg'
                           }
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
            </motion.div>

            {/* 
            About me section
            =======================
         */}
            <motion.div
               onViewportEnter={() => {
                  removeClassesFromRef(introRef)
                  removeClassesFromRef(skillsRef)
                  addClasesToRef(aboutMeRef)
               }}
               onViewportLeave={() => {
                  removeClassesFromRef(aboutMeRef)
               }}
            >
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
            </motion.div>

            {/* 
            Skills section
            =======================
         */}
            <motion.div
               onViewportEnter={() => {
                  removeClassesFromRef(aboutMeRef)
                  removeClassesFromRef(projectsRef)
                  addClasesToRef(skillsRef)
               }}
               onViewportLeave={() => {
                  removeClassesFromRef(skillsRef)
               }}
            >
               <div id="skills" className="w-full mt-10 min-h-[75vh]">
                  <motion.div
                     initial="offScreenRight"
                     whileInView="onScreen"
                     viewport={{ once: true, amount: 0.2 }}
                     className="flex flex-col items-center space-y-10"
                     variants={sectionAOS}
                  >
                     <p className="text-4xl">Skills</p>
                     <div className=" w-full xl:w-3/5 flex flex-wrap gap-4 justify-center items-center">
                        {skills.map((tech) => {
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
            </motion.div>

            {/* 
            Projects section
            =======================
         */}
            <motion.div
               onViewportEnter={() => {
                  removeClassesFromRef(skillsRef)
                  addClasesToRef(projectsRef)
               }}
               onViewportLeave={() => {
                  removeClassesFromRef(projectsRef)
               }}
            >
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
                           className="bg-gray-100 p-4 rounded-xl w-full xl:w-3/5 h-[36rem]"
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
            </motion.div>
         </div>
      </>
   )
}
