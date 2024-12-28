import { outfit } from '@/ui/fonts'
import Link from 'next/link'
import React from 'react'
import TagsAllImageDetailSection from './TagsAllImageDetailSection'

const TagPageInfoData = () => {
  return (
    <div className="md:py-12 py-8 flex flex-col gap-3">
        <p className="md:text-xl text-[14px] leading-loose py-5 text-justify">
        YouTube tags are the hidden metatags associated with videos on YouTube. Not all videos have these tags as it’s up to the video publisher to add them when they upload the video.
        </p>
        <div className='mt-5'>

        <p className="md:text-xl text-[14px] leading-looses text-justify">
        The Tag Extractor tool is a handy way of extracting and revealing these meta tags associated with any public video. Extracting YouTube Tags can be very insightful to understand how competitor videos and other high-performing videos are using these tags to boost their performance.
        </p>
        </div>
        <div className="mt-5">
        <p className="md:text-xl text-[14px] leading-loose text-justify">
        Tags are not to be confused with HashTags which are displayed in the video description and above the video title.
        </p>
        </div>
        <div className="mt-5">
        <h2 className={`text-3xl ${outfit.className}`}>What are YouTube Tags?  </h2>
        <p className="md:text-xl text-[14px] leading-loose text-justify mt-1">
            The confusing thing about YouTube is there are two types of tags:</p>
            <ul className="list-decimal py-2 flex flex-col gap-3" >
                <li className=" text-gray-400">Tags: which are the invisible “meta” Tags associated with a video. This is what the Tag Extractor extracts                </li>
                <li className=" text-gray-400">HashTags: which are the visible tags shown above a video title. See more information about YouTube HashTags.
                </li>
            </ul>



        </div>
        <div>
        <p className="leading-loose text-xl ">
        Tags are added to a video when it is uploaded on YouTube. Unlike HashTags, they do not have pound (#) signs in front of them and they can also contain spaces to encompass a string of multiple words. Best practice is to use all lowercase Tags with alpha-numeric characters.
        </p>
        </div>
        <div>
            <p className="leading-loose text-xl">
            Since these Tags are invisible on the actual video page, our friends at SEOptimer generously shared some screenshots with us so we can peek behind the scenes at how they tagged their videos.


            </p>
        </div>
        <div className="flex flex-row gap-1 items-center">
            <Link href="https://studio.youtube.com/" target='_blank' className="cursor-pointer text-2xl text-primary">
            In YouTube Studio,    </Link>
            <p className="leading-loose text-xl">
        at the bottom of the “Video details” page is a hyperlink “Show More”:

            </p>


        </div>
        <div>
            <TagsAllImageDetailSection/>
        </div>
      
    </div>
  )
}

export default TagPageInfoData
