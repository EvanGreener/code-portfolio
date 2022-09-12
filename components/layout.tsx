import React, { MouseEventHandler, MutableRefObject, Ref, useRef } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { NavElement } from '../pages'

type LayoutProps = {
   children: React.ReactNode
   navElements: NavElement[]
}

const Layout = ({ children, navElements }: LayoutProps) => {
   return (
      <div className="bg-slate-900">
         <div className="sticky top-0 z-10 ">
            <Navbar
               navElements={navElements}
            />
         </div>
         {children}
         <Footer />
      </div>
   )
}

export default Layout
