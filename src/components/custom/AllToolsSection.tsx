import React from 'react'
import toolone from "../../../public/images/qricon.jpg";
import Image from 'next/image';
import TitleText from './TitleText';
import { ImageIcon, InfoIcon, QrCode, RussianRuble, Youtube } from 'lucide-react';


const AllToolsSection = () => {
    const tools=[
        {
        toolImage:<Youtube height={120} width={120} className='mx-auto text-red-500'/>,
        toolName:"Tags Extractor",
        discription:"This is the tags extractor"
    },
        {
        toolImage:<QrCode  height={120} width={120} className='mx-auto text-purple-900'/>,
        toolName:"Tags Extractor",
        discription:"This is the tags extractor"
    },
        {
        toolImage:<RussianRuble  height={120} width={120} className='mx-auto text-orange-800'/>,
        toolName:"Currency Extractor",
        discription:"This is the tags extractor"
    },
        {
          toolImage:<ImageIcon  height={120} width={120} className='mx-auto text-teal-800'/>,
          toolName:"Tags Extractor",
        discription:"This is the tags extractor"
    },
        {
          toolImage:<InfoIcon  height={120} width={120} className='mx-auto text-sky-950'/>,
          toolName:"Tags Extractor",
        discription:"This is the tags extractor"
    },
];
  return (
    <div>

      <section className="body-font">
  <div className="container px-5 py-24 mx-auto">
        <TitleText text='Explore All Tools' 
        className="text-2xl font-bold mb-5 -tracking-widest text-black dark:text-white md:text-3xl md:leading-[4rem]"
        />
    <div className="flex flex-wrap -m-4">
        {
            tools.map((item:any,index:number)=>{
                return (
                    <div className="p-4 md:w-1/3 cursor-pointer" key={index}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      {/* <item.toolImage /> */}
                      {item.toolImage}
                      {/* <Image src={toolone} alt='tool one' width={0} height={90} className='object-cover rounded-md mx-auto  max-h-[90px]'/> */}
                      
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium  mb-1">CATEGORY</h2>
                        <h1 className="title-font text-lg font-medium  mb-3">The Catalyzer</h1>
                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        {/* <div className="flex items-center flex-wrap ">
                          <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                          </span>
                          <span className=" inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                )
            })
        }
     
    
    </div>
  </div>
</section>
    </div>
  )
}

export default AllToolsSection
