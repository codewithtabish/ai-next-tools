"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Loader from "@/components/custom/Loader";
import { Textarea } from "@/components/ui/textarea";
import { generateImage } from "@/services/image-creator";
import ImageResult from "./ImageResult";
import { DownloadIcon, X } from "lucide-react";

export default function IMAGEBOX() {
  const [prompt, setPrompt] = useState<string>(""); // User input for the image description
  const [imageURL, setImageURL] = useState<string | null>(null); // Stores the generated image URL
  const [error, setError] = useState<string | null>(null); // Stores error messages
  const [loading, setLoading] = useState<boolean>(false); // Loading indicator

  const generateImageFromPrompt = async () => {
    setLoading(true);
    setError(null);
    setImageURL(null);

    try {
      const result = await generateImage(prompt); // Call the image generation service
      if (result) {
        setImageURL(result); // Set the generated image URL
      } else {
        setError("Failed to generate image. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setImageURL(null);
    setError(null);
    setPrompt("");
    setLoading(false);
    setImageURL(null)

  };

  const handleDownload = () => {
    if (imageURL) {
      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "generated_image.webp";
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Textarea for user input */}
      <Textarea
        className="w-full max-w-3xl"
        value={prompt}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setPrompt(e.target.value)
        }
        placeholder="Enter your image description here..."
      />

      {/* Submit Button */}
      <Button
        type="submit"
        className="dark:text-white w-full md:w-auto my-2"
        onClick={generateImageFromPrompt}
        disabled={!prompt.trim() || loading}
      >
        {loading ? "Generating..." : "Generate Image"}
      </Button>

      {/* Error Message */}
      {error && <div className="text-red-500 mt-2 text-sm font-semibold">{error}</div>}

      {/* Image Result */}
      {imageURL && (
        <div className="relative mt-4 shadow-md rounded-sm p-2 border ">
          <Button onClick={handleClose} color="white">
            <X size={20}  color="white"/>
          </Button>
          <ImageResult imageURL={imageURL} />
       
        </div>
      )}

      {/* Loader */}
      {loading && <Loader />}
    </div>
  );
}
