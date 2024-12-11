import TitleText from '@/components/custom/TitleText';
import React from 'react';

const ImageGeneratorHeader = () => {
  return (
    <div>
      <div className="lg:max-w-[50%]">
        <TitleText
          text="AI Image Generator"
          className="md:text-xl font-bold -tracking-tighter lg:font-bold lg:tracking-widest text-black dark:text-white  "
        />
      </div>
      <p className="md:max-w-[60%] tracking-widest leading-loose mt-3">
        Create stunning AI-generated images effortlessly by providing a simple text prompt.
      </p>
    </div>
  );
};

export default ImageGeneratorHeader;
