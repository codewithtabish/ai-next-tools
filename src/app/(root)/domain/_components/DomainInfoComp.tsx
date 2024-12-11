import LandingToolsList from '@/components/custom/LandingToolsList';
import { outfit } from '@/ui/fonts';
import Link from 'next/link';
import React from 'react';

const DomainInfoComp = () => {
  return (
    <div className="md:py-20 py-12 flex flex-col gap-3">
      <p className="md:text-xl text-[14px] leading-loose py-5 text-justify">
        Domain Information is essential for understanding and managing online assets. It allows you to retrieve details about domains, such as their registration, DNS information, and more.
      </p>
      <div className='mt-5'>
        <p className="md:text-xl text-[14px] leading-loose text-justify">
          The Domain Information tool enables you to quickly lookup domains to get comprehensive details about them, including the registrar, expiration date, and DNS records.
        </p>
      </div>
      <div className="mt-5">
        <h2 className={`text-3xl ${outfit.className}`}>What is a Domain? </h2>
        <p className="md:text-xl text-[14px] leading-loose text-justify mt-1">
          A Domain Name is an address on the internet that is used to identify a website. It is part of the Domain Name System (DNS) that converts human-readable website addresses into IP addresses.
        </p>
        <ul className="list-decimal py-2 flex flex-col gap-3">
          <li className=" text-gray-400">Top-Level Domain (TLD): The last part of a domain name (e.g., .com, .org).</li>
          <li className=" text-gray-400">Second-Level Domain (SLD): The part of the domain name that comes immediately before the TLD (e.g., example.com, google.com).</li>
          <li className=" text-gray-400">Subdomain: An additional domain below the main domain (e.g., blog.example.com).</li>
        </ul>
      </div>
      <div>
        <p className="leading-loose text-xl">
          Domain Information is commonly used for domain management, ensuring proper configuration, and monitoring domain security.
        </p>
      </div>
      <div>
        <p className="leading-loose text-xl">
          Utilizing the Domain Information tool is simple. Just input the domain name you are interested in, and the tool will provide you with a detailed report on its registration and associated data.
        </p>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <Link href="https://www.whois.com/" target='_blank' className="cursor-pointer text-2xl text-primary">
          Visit Domain Information Tool,
        </Link>
        <p className="leading-loose text-xl">
          to retrieve comprehensive details about domains including their registration, expiration dates, and DNS records.
        </p>
      </div>
      <div>
        <LandingToolsList />
      </div>
    </div>
  );
};

export default DomainInfoComp;
