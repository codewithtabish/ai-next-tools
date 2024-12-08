import React from 'react'
import FlipText from '../ui/flip-text'

type Props = {
    text:string,
    className?:string

}

const TitleText = ({text,className}:Props) => {
  return (
    <div>

    <FlipText
    className={className}
    //   className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
      word={text}
    />

      
    </div>
  )
}

export default TitleText
