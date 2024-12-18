import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ContentRender = ({ blogContent }) => {
  return (
    <div className="prose max-w-none mb-6">
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => (
            <a href={props.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700" {...props} />
          ),
          strong: ({ node, children }) => (
            <strong className="font-semibold text-gray-800">{children}</strong>
          ),
          h1: ({ node, children }) => (
            <>
              <h1 className="text-3xl font-bold mb-2 text-gray-900 mt-4">{children}</h1>
              <div className="mt-1" />
            </>
          ),
          h2: ({ node, children }) => (
            <>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800 mt-3">{children}</h2>
              <div className="mt-1" />
            </>
          ),
          h3: ({ node, children }) => (
            <>
              <h3 className="text-xl font-medium mb-1 text-gray-700 mt-2">{children}</h3>
              <div className="mt-1" />
            </>
          ),
          h4: ({ node, children }) => (
            <>
              <h4 className="text-lg font-medium mb-1 text-gray-700 mt-1">{children}</h4>
              <div className="mt-1" />
            </>
          ),
          p: ({ node, children }) => (
            <p className="mb-6">{children}</p>
          ),
          code: ({ className, children, ...rest }) => {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <div className="bg-gray-900 md:max-w-[90%] mx-auto my-5 text-white rounded overflow-hidden mb-4 relative">
                <SyntaxHighlighter
                  showLineNumbers
                  wrapLines
                  lineNumberStyle={{ color: 'gray' }}
                  {...rest}
                  PreTag="div"
                  language={match[1]}
                  style={dark}
                >
                  {children} {/* Render children directly here */}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...rest}>
                {children} {/* Render children directly here */}
              </code>
            );
          },
          ul: ({ node, children }) => (
            <ul className="list-disc ml-5">{children}</ul>
          ),
          ol: ({ node, children }) => (
            <ol className="list-decimal ml-5">{children}</ol>
          ),
          li: ({ node, children }) => (
            <ul>
                <li>{children}</li>
            </ul>
          ),
          blockquote: ({ node, children }) => (
            <blockquote className="border-l-4 pl-4 border-gray-300 italic mb-4 text-gray-700">{children}</blockquote>
          ),
          img: ({ node, ...props }) => (
            <Image width={720} height={200} alt='blog internal image' {...props} className="max-w-full md:max-h-[180px] object-cover h-auto rounded-lg shadow-sm" />
          ),
          category: ({ node, children }) => (
            <div className="category-tag bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">{children}</div>
          ),
          link: ({ node, ...props }) => (
            <a href={props.href} className="text-blue-500 underline hover:text-blue-700" {...props} />
          ),
        }}
      >
        {blogContent}
         {/* Use the blogContent as children here */}
      </ReactMarkdown>
    </div>
  );
};

export default ContentRender;
