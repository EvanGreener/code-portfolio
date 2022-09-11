import Link from 'next/link'
import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Footer = () => {
   return (
      <footer className="rounded-t-md bg-gray-800 py-3 px-6 text-white">
         <div className="flex flex-row justify-center w-full pb-2">
            <a className="text-lg" href="mailto:evanlg16@gmail.com">
               {'Contact me: evanlg16@gmail.com'}
            </a>
         </div>
         <div className="flex flex-row justify-center gap-4">
            <IconContext.Provider value={{ color: 'white', size: '3em' }}>
               <Link href="https://github.com/EvanGreener">
                  <FaGithub />
               </Link>
               <Link href="https://www.linkedin.com/in/evan-greenstein/">
                  <FaLinkedin />
               </Link>
               <Link href="https://www.facebook.com/evan.greenstein2/">
                  <FaFacebook />
               </Link>
            </IconContext.Provider>
         </div>
         <p className="flex flex-row justify-center w-full pt-10 text-xs opacity-25">
            &copy; Evan Greenstein 2022
         </p>
      </footer>
   )
}

export default Footer
