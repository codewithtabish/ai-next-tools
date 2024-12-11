import LandingToolsList from '@/components/custom/LandingToolsList';
import { outfit } from '@/ui/fonts';
import Link from 'next/link';
import React from 'react';

const IMAGECREATECOMP = () => {
  return (
    <div className="md:py-20 py-12 flex flex-col gap-3">
      <p className="md:text-xl text-[14px] leading-loose py-5 text-justify">
        The Image Create tool is a powerful resource for generating custom images based on your input. Whether you need illustrations, artwork, or creative visuals, this tool can transform your ideas into reality.
      </p>
      <div className="mt-5">
        <p className="md:text-xl text-[14px] leading-loose text-justify">
          This tool allows you to create high-quality images quickly and efficiently. Simply provide a description or prompt, and it will generate a unique image tailored to your specifications.
        </p>
      </div>
      <div className="mt-5">
        <h2 className={`text-3xl ${outfit.className}`}>What is the Image Create Tool? </h2>
        <p className="md:text-xl text-[14px] leading-loose text-justify mt-1">
          The Image Create Tool is an advanced application that uses AI-powered algorithms to generate images based on text descriptions. It can produce visuals ranging from realistic photographs to abstract art.
        </p>
        <ul className="list-decimal py-2 flex flex-col gap-3 md:px=0 px-4">
          <li className="text-gray-400">Customizable Outputs: Generate images that align with your specific needs and preferences.</li>
          <li className="text-gray-400">Quick and Efficient: Get high-quality images in seconds without the need for manual design.</li>
          <li className="text-gray-400">Wide Range of Styles: From realistic visuals to creative artwork, the tool supports various styles.</li>
          <li className="text-gray-400">User-Friendly: Simply input a text prompt, and the tool handles the rest.</li>
        </ul>
      </div>
      <div>
        <p className="leading-loose text-xl">
          The Image Create Tool is widely used for creative projects, marketing campaigns, and even personal endeavors like custom art or graphics.
        </p>
      </div>
      <div>
        <p className="leading-loose text-xl">
          Using the Image Create Tool is straightforward. Just enter a description of what you want to visualize, and it will generate an image that matches your input.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-2 lg:gap-1 items-center">
        <Link href="https://www.imagecreator.io/" target="_blank" className="cursor-pointer text-2xl text-primary">
          Visit the Image Create Tool,
        </Link>
        <p className="leading-loose text-xl">
          to transform your text prompts into stunning visuals effortlessly.
        </p>
      </div>
      <div>
        <LandingToolsList />
      </div>
    </div>
  );
};

export default IMAGECREATECOMP;
