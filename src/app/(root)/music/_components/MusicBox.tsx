"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Loader from "@/components/custom/Loader";
import { Textarea } from "@/components/ui/textarea";
// import { DownloadIcon, X } from "lucide-react";
import { generateMusic } from "@/services/music-service";
import MusicResult from "./MusicResult";

export default function MUSICBOX() {
  const [lyrics, setLyrics] = useState<string>(""); // User input for lyrics
  const [musicURL, setMusicURL] = useState<string | null>(null); // Stores the generated music URL
  const [error, setError] = useState<string | null>(null); // Stores error messages
  const [loading, setLoading] = useState<boolean>(false); // Loading indicator

  const generateMusicFromLyrics = async () => {
    setLoading(true);
    setError(null);
    setMusicURL(null);

    try {
      const result = await generateMusic(lyrics); // Call the music generation service
      
      if (result) {
        setMusicURL(result); // Set the generated music URL
      } else {
        setError("Failed to generate music. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setMusicURL(null);
    setError(null);
    setLyrics("");
    setLoading(false);
  };

  const handleDownload = () => {
    if (musicURL) {
      const link = document.createElement("a");
      link.href = musicURL;
      link.download = "generated_music.mp3";
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Textarea for user input */}
      <Textarea
        className="w-full max-w-3xl"
        value={lyrics}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setLyrics(e.target.value)
        }
        placeholder="Enter your lyrics here..."
      />

      {/* Submit Button */}
      <Button
        type="submit"
        className="dark:text-white w-full md:w-auto my-2"
        onClick={generateMusicFromLyrics}
        disabled={!lyrics.trim() || loading}
      >
        {loading ? "Generating..." : "Generate Music"}
      </Button>

      {/* Error Message */}
      {error && <div className="text-red-500 mt-2 text-sm font-semibold">{error}</div>}

      {/* Music Result */}
      {musicURL && (
        <MusicResult musicURL={musicURL} handleDownload={handleDownload}
        handleClose={handleClose} />
        
      )}

      {/* Loader */}
      {loading && <Loader />}
    </div>
  );
}
