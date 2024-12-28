import { outfit } from '@/ui/fonts';
import Link from 'next/link';
import React from 'react';

const MusicRelatedInfo = () => {
  return (
    <div className="md:py-20 py-12 flex flex-col gap-3">
      <p className="md:text-xl text-[14px] leading-loose py-5 text-justify">
        The Music Create tool allows you to generate custom music tracks based on the lyrics you provide. Whether you're creating instrumental backgrounds or full songs, this tool transforms your words into melodies.
      </p>
      <div className="mt-5">
        <p className="md:text-xl text-[14px] leading-loose text-justify">
          This tool offers the ability to create high-quality music tracks quickly and efficiently. Simply input your lyrics, and the AI will generate a unique melody tailored to your words.
        </p>
      </div>
      <div className="mt-5">
        <h2 className={`text-3xl ${outfit.className}`}>What is the Music Create Tool? </h2>
        <p className="md:text-xl text-[14px] leading-loose text-justify mt-1">
          The Music Create Tool is an AI-powered application that generates music based on lyrics or textual input. It can create a wide range of musical styles, from pop and rock to classical and electronic.
        </p>
        <ul className="list-decimal py-2 flex flex-col gap-3 md:px=0 px-4">
          <li className="text-gray-400">Customizable Outputs: Generate music that aligns with your lyrical input and style preferences.</li>
          <li className="text-gray-400">Quick and Efficient: Create music in minutes, eliminating the need for manual composition.</li>
          <li className="text-gray-400">Wide Range of Genres: From ambient to upbeat tracks, the tool supports a variety of music genres.</li>
          <li className="text-gray-400">User-Friendly: Simply provide lyrics or prompts, and the tool does the rest, turning your words into music.</li>
        </ul>
      </div>
      <div>
        <p className="leading-loose text-xl">
          The Music Create Tool is perfect for creative projects, video soundtracks, or even personal music exploration. You can create songs that match the mood of your lyrics with ease.
        </p>
      </div>
      <div>
        <p className="leading-loose text-xl">
          Using the Music Create Tool is easy. Just enter your lyrics, select a genre or mood, and the AI will generate a matching music track for you.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-2 lg:gap-1 items-center">
        <Link href="https://www.musiccreator.io/" target="_blank" className="cursor-pointer text-2xl text-primary">
          Visit the Music Create Tool,
        </Link>
        <p className="leading-loose text-xl">
          and transform your lyrics into music effortlessly.
        </p>
      </div>
      <div>
        {/* <LandingToolsList /> */}
      </div>
    </div>
  );
};

export default MusicRelatedInfo;
