import React from 'react'
import ImageGeneratorHeader from './_components/ImageCreatorHeadTitle'
import IMAGEBOX from './_components/ImageBox'
import IMAGEINFOCOMP from './_components/ImageCreatorInfoComp'


const IPINFOPAGE = () => {
  return (
    <div className='flex flex-col gap-5 '>
        <ImageGeneratorHeader/>
        <IMAGEBOX/>
        <IMAGEINFOCOMP/>
      

    </div>
  )
}

export default IPINFOPAGE
