import React from 'react'
import Head from 'next/head'
import Footer from '@/components/custom/Footer'




const TagsRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <title>YouTube Tags Extractor Tool | Extract Tags from Any YouTube Video</title>
        <meta
          name="description"
          content="Use our YouTube Tags Extractor tool to quickly extract tags from any YouTube video by providing its URL. Improve your SEO and find the most relevant keywords."
        />
        <meta
          name="keywords"
          content="YouTube tags extractor, extract YouTube tags, YouTube SEO, YouTube video tags, YouTube keywords, YouTube tag generator, YouTube video optimization"
        />
        <meta property="og:title" content="YouTube Tags Extractor Tool | Extract Tags from Any YouTube Video" />
        <meta
          property="og:description"
          content="Use our YouTube Tags Extractor tool to quickly extract tags from any YouTube video by providing its URL. Improve your SEO and find the most relevant keywords."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easykit.codewithtabish.com/tags" />
        <meta property="og:image" content="https://easykit.codewithtabish.com/meta-image.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Tags Extractor Tool | Extract Tags from Any YouTube Video" />
        <meta
          name="twitter:description"
          content="Use our YouTube Tags Extractor tool to quickly extract tags from any YouTube video by providing its URL. Improve your SEO and find the most relevant keywords."
        />
        <meta name="twitter:image" content="https://easykit.codewithtabish.com/meta-image.svg" />
        <link rel="canonical" href="https://easykit.com/tags" />
      </Head>
      <div className="max-w-5xl min-h-[100vh] mx-auto py-6 md:py-8 md:px-0 px-4">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default TagsRootLayout
