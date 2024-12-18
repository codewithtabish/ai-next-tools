import { fetchBlogBySlug } from '@/services/blog-service';
import React from 'react';
import BlogReadSection from './_components/BlogReadSection';

type BlogProps = {
  params: { slug: string }; // Accepting blogId as a parameter from props
};

const Page = async({ params }: any) => {
  const { slug } = params; // Destructuring to extract blogId
  const response=await fetchBlogBySlug(slug)


  return (
    <div>
      {/* <h1>The slug is: {slug}</h1> */}
      {response&&<BlogReadSection blog={response?.blog}/>
    }
    </div>
  );
};

export default Page;
