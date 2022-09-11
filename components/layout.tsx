import React from 'react'
import Navbar from './navbar'

type LayoutProps = {
   children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <div className="bg-slate-900">
         <div className="sticky top-0 z-10 ">
            <Navbar />
         </div>
         {children}
      </div>
   )
}

export default Layout
