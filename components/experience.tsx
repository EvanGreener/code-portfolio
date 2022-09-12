import { RefObject } from 'react'
import { IconContext } from 'react-icons'
import { FaReact, FaJava, FaPython, FaLinux } from 'react-icons/fa'
import {
   SiJavascript,
   SiMysql,
   SiCsharp,
   SiAndroidstudio,
} from 'react-icons/si'

const Experience = ({
   experienceRef,
}: {
   experienceRef: RefObject<HTMLParagraphElement>
}) => {
   return (
      <>
         <p
            ref={experienceRef}
            className="font-bold font-mono text-xl scroll-mt-16"
         >
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
      </>
   )
}

export default Experience