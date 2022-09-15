import profile from '../assets/profile.jpg'
import Image from 'next/image'
import { RefObject } from 'react'

const AboutMe = ({
   aboutRef,
}: {
   aboutRef: RefObject<HTMLParagraphElement>
}) => {
   return (
      <div className="flex flex-col items-center gap-y-10 py-5 ">
         <p ref={aboutRef} className="font-bold text-xl font-mono scroll-mt-20">
            About me
         </p>
         <div className="w-3/5 sm:w-1/4 overflow-hidden rounded-full ">
            <Image
               src={profile}
               alt="profile pic"
               layout="responsive"
               objectFit="cover"
            />
         </div>
         <p className="sm:w-2/5 text-lg font-mono">
            <span className="text-3xl font-bold">&gt;_</span> A 3rd year
            software engineering at Concordia University student who&apos;s
            extremely passionate about programming, computers and engineering.
            Before studying at Concordia, I completed a computer science DEC
            {" (Diplome d'Etudes Collegiales) "} at Dawson College.
         </p>
      </div>
   )
}

export default AboutMe
