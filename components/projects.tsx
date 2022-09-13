import Image from 'next/image'
import { RefObject } from 'react'
import { Project } from '../pages'

type ProjectProps = {
   projects: Project[]
   projectsRef: RefObject<HTMLParagraphElement>
}

const Projects = ({ projects, projectsRef }: ProjectProps) => {
   return (
      <>
         <p
            ref={projectsRef}
            className="font-bold font-mono text-xl scroll-mt-16"
         >
            Projects I&apos;ve worked on (side scroll for more)
         </p>
         <div className="flex flex-row flex-nowrap w-2/3 overflow-x-auto gap-x-10">
            {projects.map((item) => {
               const { title, image, tags, link } = item
               return (
                  <div
                     key={link}
                     className="flex flex-col flex-none w-fit items-center gap-y-2"
                  >
                     <p className="underline text-lg text-center font-mono">
                        {title}
                     </p>
                     <div className="sm:w-3/4 hover:blur-sm">
                        <Image src={image} alt="Project image" />
                     </div>
                     <code className="text-center">{tags}</code>
                  </div>
               )
            })}
         </div>
      </>
   )
}

export default Projects
