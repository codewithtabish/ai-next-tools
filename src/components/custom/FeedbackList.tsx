/** @format */

import BlurFade from '@/components/ui/blur-fade';
import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const reviews = [
    {
      name: 'Jack',
      username: '@jack',
      body: "The QR code generator tool is a game-changer! It worked perfectly for my event invites.",
      img: 'https://avatar.vercel.sh/jack',
    },
    {
      name: 'Jill',
      username: '@jill',
      body: "I used the currency converter tool, and it made my international shopping so much easier. Love it!",
      img: 'https://avatar.vercel.sh/jill',
    },
    {
      name: 'John',
      username: '@john',
      body: "The tags extractor tool helped me optimize my blog's SEO effortlessly. Incredible experience!",
      img: 'https://avatar.vercel.sh/john',
    },
    {
      name: 'Jane',
      username: '@jane',
      body: "Creating personalized QR codes for my business was a breeze with this site. Highly recommend the QR generator!",
      img: 'https://avatar.vercel.sh/jane',
    },
    {
      name: 'Jenny',
      username: '@jenny',
      body: "The unit converter tool is so accurate and easy to use. I rely on it daily!",
      img: 'https://avatar.vercel.sh/jenny',
    },
    {
      name: 'James',
      username: '@james',
      body: "The text analyzer tool helped me refine my content effortlessly. This website is a lifesaver!",
      img: 'https://avatar.vercel.sh/james',
    },
    {
      name: 'Alice',
      username: '@alice',
      body: "The file compressor tool reduced my file sizes without any loss in quality. So helpful!",
      img: 'https://avatar.vercel.sh/alice',
    },
    {
      name: 'Bob',
      username: '@bob',
      body: "I used the password generator to create strong, secure passwords. It's super reliable!",
      img: 'https://avatar.vercel.sh/bob',
    },
    {
      name: 'Eve',
      username: '@eve',
      body: "The image resizer tool saved me hours of work. It's fast and so simple to use!",
      img: 'https://avatar.vercel.sh/eve',
    },
    {
      name: 'Tom',
      username: '@tom',
      body: "The PDF to Word converter worked like a charm. It kept all the formatting intact. Amazing tool!",
      img: 'https://avatar.vercel.sh/tom',
    },
  ];
  

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: //   img,
//   name,
//   username,
//   body,
{
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <Image
          className='rounded-full'
          width='32'
          height='32'
          alt=''
          src={img}
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-[12px]'>{body}</blockquote>
    </figure>
  );
};

export default function FeedbackList() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div className='flex relative  py-12 mb-14  flex-col items-center justify-center overflow-hidden '>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className='text-xl font-bold my-4 mb-5'>What Our Users Say</h2>
      </BlurFade>
      <Marquee
        pauseOnHover
        className='[--duration:20s]'
      >
        {firstRow.map((review: any) => (
          <ReviewCard
            key={review.username}
            {...review}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className='[--duration:20s]'
      >
        {secondRow.map((review: any) => (
          <ReviewCard
            key={review.username}
            {...review}
          />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}
