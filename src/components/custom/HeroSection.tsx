"use client"
import Image from 'next/image'
import React from 'react'
import HeroTwo from "../../../public/images/herotwo.svg";
import HeroThree from "../../../public/images/herothree.svg";
import { Button } from '../ui/button'
import { useTheme } from 'next-themes';

const HeroSection = () => {
    const { theme } = useTheme();
    const isDark = theme == "dark" ? HeroTwo : HeroThree;
  return (
    <section className="">
    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
    All-in-One Tool Hub
    <br className="hidden lg:inline-block" />
    Simplify Your Everyday Tasks
  </h1>
  <p className="mb-8 leading-relaxed ">
    Explore a collection of powerful tools like tags extractor, currency converter, QR generator, and more—all in one place. Enhance productivity with ease.
  </p>
  <div className="flex justify-center">
    <Button
      color="primary"
      size="lg"
      className="text-white"
    >
      Explore Tools
    </Button>
  </div>
</div>

      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded md:w-[80%] w-full"
          alt="hero"
          src={isDark}
          width={200}
          height={200}
        />
      </div>
    </div>
  </section>
  )
}

export default HeroSection
