import { RefObject } from 'react'
import { IconContext } from 'react-icons'
import { FaReact, FaJava, FaLinux, FaGitSquare } from 'react-icons/fa'
import { SiMysql, SiCsharp } from 'react-icons/si'

export type Skill = {
   skill: string
   icon: JSX.Element
   blurb: string
}

const Skills = ({
   skillsRef,
}: {
   skillsRef: RefObject<HTMLParagraphElement>
}) => {
   const skills: Skill[] = [
      {
         skill: `React`,
         icon: <FaReact />,
         blurb: `I started teaching myself React & ES6 in 2019 and still learning. I've built
         a few projects with React including this website which uses the NextJS framework, typescript
         and Tailwind css. I really enjoy working with React.`,
      },
      {
         skill: `Java`,
         icon: <FaJava />,
         blurb: `I have 5 years of academic experience with Java and Java frameworks. Throughout my
         academia, I've worked on many java programming assignments but some of the bigger projects 
         I've worked on were a twitter client using Java FX (solo project) a full stack e-commerce 
         application using Java Server Faces (JSF) and Java Persistence API (JPA) (team project).`,
      },
      {
         skill: `SQL`,
         icon: <SiMysql />,
         blurb: `I have a lot of academic experience with SQL databases. I've used it in database classes
         as well as in my other programming classes where my teammates needed to created a backend to 
         connect to an SQLite database which we also created. `,
      },
      {
         skill: `C#`,
         icon: <SiCsharp />,
         blurb: `The experience I have with C# is mostly academic. I've made a few applications using the
         Windows Presentation Foundation (WPF) framework. I've also dabbled in the Unity game engine
         which uses C# as a scripting language.`,
      },
      {
         skill: `Git`,
         icon: <FaGitSquare />,
         blurb: `Git is without question the tool I've used the most. I've been involved in many academic 
         team projects with a good amount of people (4-6 people) and therefore required best git practices.
         Even when developing a project by myself I will use it.`,
      },
      {
         skill: `Linux`,
         icon: <FaLinux />,
         blurb: `I'm very familiar with the Unix/Linux command line. I've used it a lot in school and
         I continue to use it personally. I've devoted some time to learning ethical hacking on TryHackMe.com
         and OverTheWire`,
      },
   ]
   return (
      <>
         <p
            ref={skillsRef}
            className="font-bold font-mono text-xl scroll-mt-16"
         >
            Skills
         </p>
         <IconContext.Provider value={{ size: '4em', color: 'white' }}>
            <div className="flex flex-row flex-wrap justify-center gap-10">
               {skills.map((item) => {
                  const { skill, icon, blurb } = item
                  return (
                     <div
                        key={skill}
                        className="flex flex-col items-center gap-y-4 sm:w-1/4"
                     >
                        {icon}
                        <p className="text-center font-mono">{blurb}</p>
                     </div>
                  )
               })}
            </div>
         </IconContext.Provider>
      </>
   )
}

export default Skills
