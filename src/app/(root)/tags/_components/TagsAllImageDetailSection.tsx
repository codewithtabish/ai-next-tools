import Image from 'next/image';
import React from 'react';
import TagInfoOne from "../../../../../public/images/tags/tag-info-one.svg";
import TagInfoTwo from "../../../../../public/images/tags/tags-info-two.svg";
import TagsInfoThree from "../../../../../public/images/tags/tags-info-three.svg";
import IPONE from "../../../../../public/images/iptwo.svg";
import ImageTextExtract from "../../../../../public/images/image-text-extract.svg";

const tools = [
  {
    title: "QR Generator",
    image: TagInfoOne,
    description: `Easily generate QR codes for a variety of applications, from sharing URLs and contact details to creating event invitations. 
                  Customize the size, color, and format of the code to suit your needs. 
                  This tool ensures quick and reliable encoding for smooth user experience. 
                  Ideal for both personal and professional use, QR codes have never been this simple to create. 
                  Perfect for businesses looking to enhance their digital presence.`,
  },
  {
    title: "Tags Extractor",
    image: TagInfoTwo,
    description: `Effortlessly extract tags from large blocks of text, helping improve your SEO strategy. 
                  This tool identifies the most relevant keywords that can boost your content's visibility on search engines. 
                  Save time and focus on what matters while we analyze your text and generate actionable insights. 
                  Whether you’re a blogger or a marketer, this tool enhances your productivity. 
                  Gain better search rankings by targeting the right audience effectively.`,
  },
  {
    title: "IP Information",
    image: TagsInfoThree,
    description: `Discover detailed information about any IP address, including geolocation, ISP, and network data. 
                  This tool is perfect for network administrators and cybersecurity professionals. 
                  Gain insights into user locations and ensure the integrity of your web services. 
                  It helps in identifying suspicious activities and securing your online assets. 
                  A must-have for anyone managing large-scale web applications or systems.`,
  },
  {
    title: "Domain Details",
    image: IPONE,
    description: `Get comprehensive information about any domain, including ownership details, expiration dates, and registrar data. 
                  This tool helps webmasters, businesses, and researchers in making informed decisions. 
                  Check the availability of domains and evaluate their history before purchase. 
                  Stay ahead in the digital game by uncovering critical details about competing or desired domains. 
                  Perfect for building your online portfolio with confidence.`,
  },
  {
    title: "Image Text Extractor",
    image: ImageTextExtract,
    description: `Get comprehensive information about any domain, including ownership details, expiration dates, and registrar data. 
                  This tool helps webmasters, businesses, and researchers in making informed decisions. 
                  Check the availability of domains and evaluate their history before purchase. 
                  Stay ahead in the digital game by uncovering critical details about competing or desired domains. 
                  Perfect for building your online portfolio with confidence.`,
  }
];

const TagsAllImageDetailSection = () => {
  return (
    <section className="py-12 px-5">
      {tools.map((tool, index) => (
        <div key={index} className="flex lg:flex-row flex-col justify-between items-center gap-5 mb-20">
          {index % 2 === 0 ? (
            <>
              <div className="flex-1">
                <Image src={tool.image} className="w-full max-h-[350px] object-cover" alt={tool.title} width="500" height="200" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="dark:text-gray-400  leading-loose  text-sm">{tool.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="dark:text-gray-400 text-sm leading-loose">{tool.description}</p>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <Image src={tool.image} className="w-full max-h-[350px] object-cover" alt={tool.title} width="500" height="200" />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default TagsAllImageDetailSection;
