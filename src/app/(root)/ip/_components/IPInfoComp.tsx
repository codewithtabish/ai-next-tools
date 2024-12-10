import LandingToolsList from '@/components/custom/LandingToolsList';
import { outfit } from '@/ui/fonts';
import Link from 'next/link';
import React from 'react';

const IPInfoComp = () => {
  return (
    <div className="md:py-20 py-12 flex flex-col gap-3">
      <p className="md:text-xl text-[14px] leading-loose py-5 text-justify">
        IP Information is crucial for understanding and managing network resources. You can use it to retrieve details about IP addresses, such as their geographical location, organization details, and more.
      </p>
      <div className='mt-5'>
        <p className="md:text-xl text-[14px] leading-loose text-justify">
          The IP Information tool allows you to quickly lookup IP addresses to get comprehensive details about them, including the country, city, and ISP (Internet Service Provider) information.
        </p>
      </div>
      <div className="mt-5">
        <h2 className={`text-3xl ${outfit.className}`}>What is an IP Address? </h2>
        <p className="md:text-xl text-[14px] leading-loose text-justify mt-1">
          An IP Address (Internet Protocol Address) is a numerical label assigned to each device connected to a computer network that uses the IP for communication. It serves two main purposes: identification and location addressing.
        </p>
        <ul className="list-decimal py-2 flex flex-col gap-3">
          <li className=" text-gray-400">Public IP Address: An IP address that is used to identify a device on the Internet.</li>
          <li className=" text-gray-400">Private IP Address: An IP address used within a private network (e.g., home or corporate LAN).</li>
          <li className=" text-gray-400">Dynamic IP Address: An IP address that changes each time a device connects to the internet.</li>
          <li className=" text-gray-400">Static IP Address: An IP address that remains constant over time and does not change unless configured manually.</li>
        </ul>
      </div>
      <div>
        <p className="leading-loose text-xl">
          IP Information is commonly used for network management, security monitoring, and accessing geo-specific content online.
        </p>
      </div>
      <div>
        <p className="leading-loose text-xl">
          Utilizing the IP Information tool is simple. Just input the IP address you are interested in, and the tool will provide you with a detailed report on its location and associated data.
        </p>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <Link href="https://www.ipinfo.io/" target='_blank' className="cursor-pointer text-2xl text-primary">
          Visit IP Information Tool,
        </Link>
        <p className="leading-loose text-xl">
          to retrieve comprehensive details about IP addresses including their geographical and organizational information.
        </p>
      </div>
      <div>
        <LandingToolsList />
      </div>
    </div>
  );
};

export default IPInfoComp;
