import React from 'react'
import MUSICGeneratorHeader from './_components/MusicGenerateTitle'
import MUSICBOX from './_components/MusicBox'
import MusicRelatedInfo from './_components/MusicRelatedInfo'
import MusicInfoRelatedImages from './_components/MusicInfoRelatedImages'


const MusicCREATEPAGE = () => {
  return (
    <div className='flex flex-col gap-5 '>
        <MUSICGeneratorHeader/>
        <MUSICBOX/>
        <MusicRelatedInfo/>
        <MusicInfoRelatedImages/>

     
      

    </div>
  )
}

export default MusicCREATEPAGE
