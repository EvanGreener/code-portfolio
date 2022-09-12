import profile from '../assets/profile.jpg'
import Image from 'next/image'
import { RefObject } from 'react'

const AboutMe = ({
   aboutRef,
}: {
   aboutRef: RefObject<HTMLParagraphElement>
}) => {
   return (
      <>
         <p ref={aboutRef} className="font-bold text-xl font-mono scroll-mt-20">
            About me
         </p>
         <div className="w-3/5 sm:w-1/4">
            <Image src={profile} alt="profile pic" layout="responsive" />
         </div>
         <p className="sm:w-1/3 font-mono">
            <span className="text-2xl font-bold">&gt;_</span> A 3rd year
            software engineering at Concordia University student who&apos;s
            extremely passionate about programming, computers and engineering.
            Before studying at Concordia, I completed a computer science DEC at
            Dawson College.
         </p>
      </>
   )
}

export default AboutMe
