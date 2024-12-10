import Footer from '@/components/custom/Footer'
import React from 'react'

const QRCODEGERNERATORLAYOUT = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
    <div className=" max-w-5xl min-h-[100vh] mx-auto py-6 md:py-8 md:px-0 px-4">
      {children}
        </div>
      <Footer/>
    </div>
  )
}

export default QRCODEGERNERATORLAYOUT
