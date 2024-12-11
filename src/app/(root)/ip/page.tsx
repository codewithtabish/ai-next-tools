import React from 'react'
import IPHeadeTitle from './_components/IpHeadTitle'
import IPInfoComp from './_components/IPInfoComp'
import IPINFOBOX from './_components/IPInfoBox'


const IPINFOPAGE = () => {
  return (
    <div className='flex flex-col gap-5 '>
        <IPHeadeTitle/>
        <IPINFOBOX/>
        <IPInfoComp/>
      
    </div>
  )
}

export default IPINFOPAGE
