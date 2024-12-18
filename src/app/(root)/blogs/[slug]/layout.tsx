import React from 'react'
import RecommendedBlogs from '../_components/RecommendedBlogs'
import BlogsAd from '../_components/BlogsAd'

const SingleBlogRootLayout = ({ children}:any) => {
  return (
    <div className='container mx-auto lg:px-0 px-5 py-8'>
      <div className=" lg:grid lg:grid-cols-12 flex flex-col  gap-10 md:gap-6">
        <div className="col-span-10">
        {children}
          </div>
          <div className='col-span-2  flex flex-col gap-6 '>
            {/* <RecommendedBlogs/> */}
            <div className="hidden lg:block">
            <BlogsAd/>

            </div>

          </div>


      </div>
      
    </div>
  )
}

export default SingleBlogRootLayout
