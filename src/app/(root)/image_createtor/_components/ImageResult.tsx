"use client";

import Image from "next/image";
import React, { useState } from "react";
import { DownloadIcon, Share2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageResultProps {
  imageURL: string;
}

const ImageResult: React.FC<ImageResultProps> = ({ imageURL }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(imageURL); // Fetch the image as a Blob
      const blob = await response.blob();

      // Convert the Blob to a desired format (PNG or JPG)
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Use the native Image constructor to create a new image element
      const img = document.createElement("img");
      img.src = URL.createObjectURL(blob);

      await new Promise((resolve) => {
        img.onload = () => {
          // Set canvas size to match the image
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw the image on the canvas
          ctx?.drawImage(img, 0, 0);
          resolve(null);
        };
      });

      // Export the canvas as a data URL in the desired format (PNG/JPG)
      const dataURL = canvas.toDataURL("image/png"); // Change to "image/jpeg" for JPG

      // Create a download link
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "generated_image.png"; // Change to "generated_image.jpg" for JPG
      link.click();

      // Cleanup
      URL.revokeObjectURL(img.src);
    } catch (error) {
      // console.error("Error downloading the image:", error);
    }
  };

  const handleShare = async () => {
    try {
      const response = await fetch(imageURL);
      const blob = await response.blob();
      const file = new File([blob], "shared_image.png", { type: "image/png" });

      // Check if the Web Share API is available and can share a file
      if (navigator.share) {
        await navigator.share({
          title: 'Check out this image!',
          text: 'Here is an image I found interesting.',
          files: [file], // Share the image file directly
        });
      } else {
        alert("Social media share functionality is not available on this platform.");
      }
    } catch (error) {
      console.error("Error sharing the image:", error);
    }
  };

  return (
    <div className="relative mt-5 flex flex-col items-center">
      {/* Image Placeholder with Blur Effect */}
      <div className="relative w-[400px] h-[400px]">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center animate-pulse rounded-md">
            <span className="text-gray-500">Loading image...</span>
          </div>
        )}
        <Image
          width={400}
          height={400}
          src={imageURL}
          alt="Generated Image"
          className={`rounded-md shadow-lg object-cover transition-all duration-500 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
      </div>

      {/* Download and Share Buttons */}
      <div className="mt-4 flex w-full space-x-2">
        {/* Download Button */}
        <div className="flex-1">

        <Button
        className="flex-1 w-full"
        // className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={handleDownload}
        >
          <DownloadIcon className="mr-2" size={20} />
          Download Image
        </Button>
          </div>

        {/* Share Button */}
        <Button
        variant={'outline'}
          // className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          onClick={handleShare}
        >
          <Share2Icon className="mr-2" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ImageResult;
