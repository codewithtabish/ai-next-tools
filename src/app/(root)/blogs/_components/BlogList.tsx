// import { blogsArray } from '@/constants/data'
import { fetachAllBlogsService } from '@/services/blog-service'
import { BlogInterface } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogList = async() => {
    let blogsArray
    const data=await fetachAllBlogsService() 
    blogsArray=data?.blogs
   
    
    // await blogs.json()

  return (
    <div className='md:py-10'>
        <div className='flex flex-col md:gap-5 md:max-w-4xl mx-auto  md:p-4'>
            {
                blogsArray?.map((blog:BlogInterface,index:number) => {
                    return (
                        <Link href={`/blogs/${blog?.slug}`} key={index} className='md:max-w-[100%]  md:mx-0 mx-4  mt-5  dark:border dark:border-gray-500 dark:rounded-lg rounded-sm flex md:flex-row md:shadow-sm  flex-col md:px-0 px-1  md:items-center cursor-pointer '>
                            <div className='flex-1   '>

                            <Image src={blog?.blog_main_image} className="object-cover rounded-md w-full max-h-[160px] min-h-[160px] " alt="blog Main hero image"  width={200} height={1000} loading="lazy"/>

                            </div>
                            <div className='flex-1 md:px-0    flex flex-col md:gap-4 gap-1 justify-center items-center '>

                            <h3 className='md:text-xl  md:text-center font-bold md:px-1 px-3'>{blog?.title}</h3>
                            
                            <p className='text-sm md:px-1 leading-5 px-3  md:max-w-[80%] mx-auto'>{blog?.blog_content?.length>150?blog.blog_content.slice(0,150):blog.blog_content}</p>

                            </div>
                        </Link>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default BlogList
