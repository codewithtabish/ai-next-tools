
import React from 'react'
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import Link from 'next/link';
import Markdown from 'react-markdown';
import ContentRender from './ContentRender';
import Image from 'next/image';

const markdown = '# Hi, *Pluto*!'


const BlogReadSection = ({blog}:any) => {
  return (
         <div className="max-w-4xl mx-auto p-6 ">
         <div className="mb-6">
           <Image
            src={blog.blog_main_image}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="mb-4 pt-3">
          <h1 className="md:text-3xl text-xl font-bold ">{blog.title}</h1>
          <p className="text-sm  mt-2">
            Category: <span className="text-blue-600">{blog.category}</span>
          </p>
        </div>
        <ContentRender blogContent={blog?.blog_content}/>




        <div className="mt-6">
          <h2 className="text-lg font-semibold ">Keywords</h2>
          <div className="flex flex-wrap mt-2">
            {blog.blog_keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
  
        <div className="mt-6  text-sm">
          Published on: {new Date(blog.created_at).toLocaleDateString()}
        </div>

     
        
        </div>

  )
}

export default BlogReadSection

  