import Image from 'next/image'
import { RefObject } from 'react'
import Section from './section'

const AboutMe = ({
   aboutRef,
}: {
   aboutRef: RefObject<HTMLParagraphElement>
}) => {
   return (
      <Section>
         <p ref={aboutRef} className="font-bold text-xl font-mono scroll-mt-20">
            About me
         </p>
         <div className="w-3/5 sm:w-1/4 flex justify-center">
            <Image
               src="/profile.jpg"
               alt="profile pic"
               width={250}
               height={250}
               className="overflow-hidden rounded-full"
            />
         </div>
         <p className="sm:w-2/5 text-lg font-mono">
            <span className="text-3xl font-bold">&gt;_</span> A 3rd year
            software engineering at Concordia University student who&apos;s
            extremely passionate about programming, computers and engineering.
            Before studying at Concordia, I completed a computer science DEC
            {" (Diplome d'Etudes Collegiales) "} at Dawson College.
         </p>
      </Section>
   )
}

export default AboutMe
