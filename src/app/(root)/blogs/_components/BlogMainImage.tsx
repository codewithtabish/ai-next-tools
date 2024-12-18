import React from 'react'
import blogHD from "../../../../../public/images/blog-one.jpg";
import blogMobile from "../../../../../public/images/blog-mobile.jpg";
import Image from 'next/image';


const BlogMainImage = () => {
  return (
    <main className="md:block hidden">
      <div className='md:block hidden'>
      <Image src={blogMobile} alt='blog Main hero image' width={1000}
      height={600} 
      className='object-cover rounded-md w-full max-h-[350px]'/>
      </div>
      <div className='block md:hidden'>
      <Image src={blogMobile} alt='blog Main hero image' width={1000} 
      className='object-cover rounded-md w-full max-h-[250px]'/>
      </div>
      
    </main>
  )
}

export default BlogMainImage
