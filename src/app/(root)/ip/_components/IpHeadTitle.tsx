import TitleText from '@/components/custom/TitleText';
import React from 'react';

const IPHeadeTitle = () => {
  return (
    <div>
      <div className="max-w-[50%]">
        <TitleText
          text="IP Information Lookup"
          className="text-xl font-bold -tracking-widest text-black dark:text-white md:text-xl mb-0"
        />
      </div>
      <p className="md:max-w-[60%] tracking-widest leading-loose mt-3">
        Discover details about your IP address, including ISP, location, and network provider. 
      </p>
    </div>
  );
};

export default IPHeadeTitle;
