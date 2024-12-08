import Footer from '@/components/custom/Footer'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
    <div className=" max-w-6xl min-h-[100vh] mx-auto py-12">
      {children}
        </div>
      <Footer/>
    </div>
  )
}

export default layout
