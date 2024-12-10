import React from 'react'
import QrHeadTitle from './_components/QrHeadTitle'
import QrTextBox from './_components/QrTextBox'
import QrInfoTool from './_components/QrInfoTool'

const QRCODEPAGE = () => {
  return (
    <div className='flex flex-col gap-5'>
       <QrHeadTitle/>
       <QrTextBox/>
       <QrInfoTool/>
      
    </div>
  )
}

export default QRCODEPAGE
