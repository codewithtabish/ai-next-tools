import LandingToolsList from '@/components/custom/LandingToolsList'
import { outfit } from '@/ui/fonts'
import Link from 'next/link'
import React from 'react'

const QrInfoTool = () => {
  return (
      <div className="md:py-20 py-12 flex flex-col gap-3">
      <p className="md:text-xl text-[14px] leading-loose py-5 text-justify">
        QR Codes are a versatile way to share information quickly. You can use them to link to websites, share contact information, or even encode text.
      </p>
      <div className='mt-5'>
        <p className="md:text-xl text-[14px] leading-loose text-justify">
          The QR Code Generator tool allows you to create QR codes for various purposes. It’s a handy tool for creating unique QR codes for marketing, sharing contact details, and more.
        </p>
      </div>
      <div className="mt-5">
        <h2 className={`text-3xl ${outfit.className}`}>What is a QR Code? </h2>
        <p className="md:text-xl text-[14px] leading-loose text-justify mt-1">
          A QR Code (Quick Response Code) is a type of matrix barcode (or two-dimensional barcode) readable by QR scanners, mobile phones with cameras, and some newer smartphones. It stores data in both vertical and horizontal directions, allowing for more information to be encoded in a small area compared to standard barcodes.
        </p>
        <ul className="list-decimal py-2 flex flex-col gap-3">
          <li className=" text-gray-400">QR Code: A two-dimensional barcode that can store URLs, contact information, and more.</li>
          <li className=" text-gray-400">Static QR Code: A fixed QR Code that cannot be changed once it is created.</li>
          <li className=" text-gray-400">Dynamic QR Code: A QR Code that can be edited after creation, allowing updates to the information it encodes without creating a new QR Code.</li>
        </ul>
      </div>
      <div>
        <p className="leading-loose text-xl">
          QR Codes are often used in marketing and promotional materials, linking customers to websites or online stores, sharing contact information, and more. They are also used in business cards, flyers, and advertisements.
        </p>
      </div>
      <div>
        <p className="leading-loose text-xl">
          Creating a QR Code is simple with the QR Code Generator tool. Just input the information you want to encode, and the tool will generate a QR Code for you to download and use.
        </p>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <Link href="https://www.qr-code-generator.com/" target='_blank' className="cursor-pointer text-2xl text-primary">
          Visit QR Code Generator,  
        </Link>
        <p className="leading-loose text-xl">
          to create QR Codes for various purposes including websites, contact details, and more.
        </p>
      </div>
      <div>
        <LandingToolsList/>
    </div>
    </div>
  )
}

export default QrInfoTool
