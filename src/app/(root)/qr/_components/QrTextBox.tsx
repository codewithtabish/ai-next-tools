"use client"
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import QRCode from "react-qr-code";
import { Twitter, Instagram, Facebook, Share } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function QrTextBox() {
  const [qrCodeText, setQrCodeText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQrCodeText(event.target.value); // Update QR code text state
  };

  const shareLink = (platform: string) => {
    const url = encodeURIComponent(`http://localhost:3000?qr=${qrCodeText}`);
    let shareUrl;

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md space-y-4">
      <div className="grid w-full gap-1.5">
        <Textarea
          placeholder="Type your message here."
          id="message"
          value={qrCodeText}
          onChange={handleInputChange}
        />
      </div>
      <div className=" max-w-[50%] max-h-[200px] mx-auto mt-4">
        <QRCode
          size={256}
          style={{ maxWidth: "100%", width: "100%" }}
          value={qrCodeText}
        //   value={`http://localhost:3000?qr=${encodeURIComponent(qrCodeText)}`}
          viewBox={`0 0 256 256`}
        />
         <div className="flex  justify-center  space-x-4 mt-2">
        <Button variant={'outline'} onClick={() => shareLink('twitter')} className="text-blue-500 hover:text-blue-700">
          <Twitter size={24} />
        </Button>
        <Button variant={'outline'} onClick={() => shareLink('instagram')} className="text-pink-500 hover:text-pink-700">
          <Instagram size={24} />
        </Button>
        <Button variant={'outline'} onClick={() => shareLink('whatsapp')} className="text-green-500 hover:text-green-700">
          <Share size={24} />
        </Button>
        <Button variant={'outline'} onClick={() => shareLink('facebook')} className="text-blue-600 hover:text-blue-800">
          <Facebook size={24} />
        </Button>
      </div>
      </div>
     
    </div>
  );
}
