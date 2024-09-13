import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { RefObject } from 'react'
export type NavElement = {
   text: string
   href: string
   isMain: boolean
   domRef: RefObject<HTMLParagraphElement>
}

type NavbarProps = {
   navElements: NavElement[]
}

const Navbar = ({ navElements }: NavbarProps) => {
   return (
      <Disclosure
         as="nav"
         className="bg-gray-800 py-3 px-6 space-x-6 rounded-b-md text-white"
      >
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
                  const { text, href, isMain, domRef } = item
                  let classes =
                     'text-lg p-1 rounded-lg hover:bg-gray-700 hidden sm:inline'
                  classes = isMain ? 'text-2xl font-bold ' : classes

                  return (
                     <span key={href}>
                        <Link
                           href={href}
                           onClick={() =>
                              domRef.current?.scrollIntoView({
                                 behavior: 'smooth',
                              })
                           }
                           className={classes}
                        >
                           {text}
                        </Link>
                     </span>
                  )
               })}

               <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-3">
                     {navElements.map((item) => {
                        const { text, href, isMain, domRef } = item
                        let classes =
                           'text-lg p-1 rounded-lg hover:bg-gray-700 '
                        classes += isMain ? 'hidden' : ''

                        return (
                           <div key={href}>
                              <Link
                                 href={href}
                                 onClick={() =>
                                    domRef.current?.scrollIntoView({
                                       behavior: 'smooth',
                                    })
                                 }
                                 className={classes}
                              >
                                 {text}
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
