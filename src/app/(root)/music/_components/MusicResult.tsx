import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, X } from "lucide-react";

const MusicResult = ({ handleClose, handleDownload, musicURL }) => {
  return (
    <div className="relative mt-8 shadow-md rounded-md p-4  w-[500px]">
      {/* Close Button */}
      <Button
      variant={'outline'}
        onClick={handleClose}
        className="absolute -top-8 left-0 transition"
        aria-label="Close"
      >
        <X size={24} />
      </Button>

      <div className="flex flex-col items-center space-y-4">
        <audio controls className="w-full  ">
          <source src={musicURL} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Download Button */}
        {/* <Button
          onClick={handleDownload}
          className="mt-2 flex items-center justify-center w-full md:w-auto "
        >
          <DownloadIcon className="mr-2" size={18} />
          Download Music
        </Button> */}
      </div>
    </div>
  );
};

export default MusicResult;
