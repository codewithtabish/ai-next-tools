import TitleText from '@/components/custom/TitleText';
import React from 'react';

const DomainHeaderTitle = () => {
  return (
    <div>
      <div className="max-w-[50%]">
        <TitleText
          text="Domain Information Lookup"
          className="text-xl font-bold -tracking-widest text-black dark:text-white md:text-xl mb-0"
        />
      </div>
      <p className="md:max-w-[60%] tracking-widest leading-loose mt-3">
        Discover details about a domain, including its registration, DNS records, and hosting provider.
      </p>
    </div>
  );
};

export default DomainHeaderTitle;
