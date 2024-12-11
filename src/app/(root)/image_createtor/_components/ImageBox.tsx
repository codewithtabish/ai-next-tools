"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Loader from "@/components/custom/Loader";
import { Textarea } from "@/components/ui/textarea";
import { generateImage } from "@/services/image-creator";
import Image from "next/image";
import ImageResult from "./ImageResult";
import { DownloadIcon, X } from "lucide-react";

export default function IMAGEBOX() {
  const [prompt, setPrompt] = useState<string>(""); // User input for the image description
  const [imageURL, setImageURL] = useState<string |any>(null); // Stores the generated image URL
  const [error, setError] = useState<string | null>(null); // Stores error messages
  const [loading, setLoading] = useState<boolean>(false); // Loading indicator
  const [showImage, setShowImage] = useState<boolean>(false); // Loading indicator

  const generateImageFromPrompt = async () => {
    setLoading(true);
    setError(null);
    setImageURL(null);

    try {
      const result = await generateImage(prompt); // Call the image generation service
      console.log("THE RESULT of the image IS ",result);
      if (result) {
        setImageURL(result); // Set the generated image URL
        setShowImage(true); // Show the generated image
      } else {
        setError("Failed to generate image. Please try again.");
        setTimeout(() => setError(null), 3000);
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
      setPrompt("");
      setError(null);
    }
  };

const handleClose=()=>{
  setShowImage(false)

}
const handleDownload=()=>{
  alert("the image is being downloaded")
}

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Textarea for user input */}
      <Textarea
        className="w-full max-w-3xl"
        value={prompt}
        onChange={(e: any) => setPrompt(e.target.value)}
        placeholder="Enter your image description here..."
      />

      {/* Submit Button */}
      {!loading && (
        <Button
          type="submit"
          className="dark:text-white w-full md:w-auto my-2"
          onClick={generateImageFromPrompt}
          disabled={!prompt.trim()}
        >
          Generate Image
        </Button>
      )}

      {/* Loader */}
      {loading && <Loader />}

      {/* Error Message */}
      {error && (
        <div className="text-red-500 mt-2 text-sm font-semibold">{error}</div>
      )}

    {imageURL && showImage && (
        <div className="relative mt-4">
          <button
            className="absolute  top-10 -right-0 p-2 text-red-500 text-3xl"
            onClick={handleClose}
          >
            <X size={20} >
                clear
                </X> {/* Lucide cross icon */}
          </button>
          <ImageResult imageURL={imageURL} />
          <button
            className="absolute -bottom-3  -right-4 p-4 text-red-500 text-3xl"
            onClick={handleDownload}
          >
            <DownloadIcon size={20} >
                clear
                </DownloadIcon> {/* Lucide cross icon */}
          </button>

        </div>
      )}

        
   
    </div>
  );
}
