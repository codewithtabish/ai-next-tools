import TitleText from '@/components/custom/TitleText'
import React from 'react'

const QrHeadTitle = () => {
  return (
    <div>
        <div className="max-w-[50%]">

          <TitleText text='QR CODE GENERATOR' 
        className="text-xl font-bold  -tracking-widest text-black dark:text-white md:text-xl md mb-0 "
        />
         
        </div>
        <p className='md:max-w-[60%] tracking-widest leading-loose  mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione possimus nihil omnis laudantium dolor dolorum distinctio odit maxime adipisci.</p>

      
    </div>
  )
}

export default QrHeadTitle
