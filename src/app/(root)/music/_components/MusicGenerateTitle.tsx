import TitleText from '@/components/custom/TitleText';
import React from 'react';

const MUSICGeneratorHeader = () => {
  return (
    <div>
      <div className="lg:max-w-[50%]">
        <TitleText
          text="AI Music Generator"
          className="md:text-xl font-bold -tracking-tighter lg:font-bold lg:tracking-widest text-black dark:text-white"
        />
      </div>
      <p className="md:max-w-[60%] tracking-widest leading-loose mt-3">
        Create unique AI-generated music effortlessly by providing lyrics and a song file.
      </p>
    </div>
  );
};

export default MUSICGeneratorHeader;
