import Image from 'next/image'
import Link from 'next/link'
import { RefObject } from 'react'
import { Project } from '../app/page'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Section from './section'

type ProjectProps = {
   projects: Project[]
   projectsRef: RefObject<HTMLParagraphElement>
}

const Projects = ({ projects, projectsRef }: ProjectProps) => {
   return (
      <Section>
         <p
            ref={projectsRef}
            className="font-bold font-mono text-xl scroll-mt-16"
         >
            Projects I&apos;ve worked on (side scroll for more)
         </p>
         <div className="flex flex-row flex-nowrap sm:w-2/3 overflow-x-auto gap-y-2 gap-x-10">
            {projects.map((item) => {
               const { title, imgSrc, tags, link } = item
               return (
                  <div
                     key={link}
                     className="flex flex-col flex-none w-fit items-center"
                  >
                     <p className="underline text-lg text-center font-mono">
                        {title}
                     </p>
                     <div className="sm:w-3/4 relative">
                        <Link
                           href={link}
                           passHref
                           className="z-10 rounded-full bg-gray-800 text-white 
                           px-3 py-2 hover:bg-gray-700 absolute top-1/2 left-1/2 
                           -translate-x-1/2 -translate-y-1/2 opacity-25 hover:opacity-100"
                        >
                           Go to{' '}
                           <FaExternalLinkAlt style={{ display: 'inline' }} />
                        </Link>
                        <Image
                           src={imgSrc}
                           alt="Project image"
                           width={500}
                           height={500}
                        />
                     </div>
                     <code className="text-center">{tags}</code>
                  </div>
               )
            })}
         </div>
      </Section>
   )
}

export default Projects
