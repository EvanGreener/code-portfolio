type Section = {
   children: React.ReactNode
   bgColor?: string
}

const Section = ({ children, bgColor }: Section) => {
   return (
      <div className={`flex flex-col items-center gap-y-10 p-5 ${bgColor}`}>
         {children}
      </div>
   )
}

export default Section
