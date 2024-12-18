import React from 'react';

const BlogsAd = () => {
  return (
    <div className="flex justify-center items-center p-6 bg-gray-100 rounded-lg my-6">
      <div className="max-w-sm text-center p-5 bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Sponsored Ad</h2>
        <p className="text-gray-600 mb-4">
          Discover the latest tools and technologies in web development. Upgrade your skills with our expert-curated courses!
        </p>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default BlogsAd;
