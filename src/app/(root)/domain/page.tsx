import React from 'react'
import DomainHeaderTitle from './_components/DomainHeadTitle'
import DomainInfoBox from './_components/DomainBox'
import DomainInfoComp from './_components/DomainInfoComp'


const DOMIANINFOPAGE = () => {
  return (
    <div className='flex flex-col gap-5 '>
        <DomainHeaderTitle/>
        <DomainInfoBox/>
        <DomainInfoComp/>
        
        
      
    </div>
  )
}

export default DOMIANINFOPAGE
