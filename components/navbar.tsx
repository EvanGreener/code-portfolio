import Link from 'next/link'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { text } from 'stream/consumers'

type NavButtonProps = {
   href: string
   text: string
   onClick: React.MouseEventHandler
   mobile: boolean
}

type NavElement = {
   text: string
   href: string
   isMain: boolean
}

const navElements: NavElement[] = [
   { text: 'Evan Greesntein', href: '/', isMain: true },
   { text: 'About Me', href: '/about', isMain: false },
   { text: 'Projects', href: '/projects', isMain: false },
]

// eslint-disable-next-line react/display-name
const NavButton = React.forwardRef<HTMLAnchorElement, NavButtonProps>(
   ({ href, text, onClick, mobile, isMain }, ref) => {
      let classes = 'text-lg p-1 rounded-lg hover:bg-gray-700'
      classes = isMain ? 'text-2xl font-bold' : classes
      classes += !mobile && !isMain ? 'hidden sm:block' : ''

      return (
         <Link href="/about" passHref>
            <a href={href} ref={ref} onClick={onClick} className={classes}>
               {text}
            </a>
         </Link>
      )
   }
)
const Navbar = () => {
   return (
      <Disclosure as="nav" className="bg-gray-800 py-3 px-6 space-x-6">
         {({ open }) => (
            <>
               <Disclosure.Button>
                  {open ? (
                     <XMarkIcon className="inline sm:hidden h-8 w-auto" />
                  ) : (
                     <Bars3Icon className="inline sm:hidden h-8 w-auto" />
                  )}
               </Disclosure.Button>
               {navElements.map((item) => {
                  const { text, href, isMain } = item
                  let classes =
                     'text-lg p-1 rounded-lg hover:bg-gray-700 hidden sm:inline'
                  classes = isMain ? 'text-2xl font-bold ' : classes

                  return (
                     <span key={href}>
                        <Link href={href}>
                           <a className={classes}>{text}</a>
                        </Link>
                     </span>
                  )
               })}

               <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-3">
                     {navElements.map((item) => {
                        const { text, href, isMain } = item
                        let classes =
                           'text-lg p-1 rounded-lg hover:bg-gray-700 '
                        classes += isMain ? 'hidden' : ''

                        return (
                           <div key={href}>
                              <Link href={href}>
                                 <a className={classes}>{text}</a>
                              </Link>
                           </div>
                        )
                     })}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}

export default Navbar
