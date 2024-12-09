import React from 'react'
import TagsInputBox from './_components/TagsInputBox'
import TagPageInfoData from './_components/TagPageInfoData'

const TagsExtractorPage = () => {
  return (
    <div>
        <div className='flex flex-col'>

        <h1 id="youtube-tag-extractor" 
    className="text-2xl md:text-3xl font-bold  my-4">
    Free YouTube Tag Extractor Tool 
   </h1>
   <span className='text-sm '> Extract Video Tags Easily</span>
    </div>
    <div className='max-w-6xl py-2 md:py-6'>
     <TagsInputBox/>
     <TagPageInfoData/>

    </div>
    </div>
  )
}

export default TagsExtractorPage
