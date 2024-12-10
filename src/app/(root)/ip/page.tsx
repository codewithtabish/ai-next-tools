import React from 'react'
import TagsInputBox from './_components/IPInfoBox'
import IPHeadeTitle from './_components/IpHeadTitle'
import IPResult from './_components/IPResult'
import IPInfoComp from './_components/IPInfoComp'


const IPINFOPAGE = () => {
  return (
    <div className='flex flex-col gap-5'>
        <IPHeadeTitle/>
        <TagsInputBox/>
        <IPInfoComp/>
      
    </div>
  )
}

export default IPINFOPAGE
