import Image from 'next/image'
import React from 'react'

const ImageResult = ({imageURL}:any) => {
  return (
    <div className="shadow-md rounded-md p-5 border mt-10">
        <div className="mt-5">
          <Image
          width={300}
          height={300}
            src={imageURL.data}
            alt="Generated Image"
            className="max-w-full rounded-md shadow-lg object-cover w-[100%] h-[100%]"
          />
         
        </div>
      
    </div>
  )
}

export default ImageResult
