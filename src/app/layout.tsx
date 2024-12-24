import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import NavBar from "@/components/custom/Navbar";
import MobileHeader from "@/components/custom/MobileHeader";
import { lusitana, outfit } from "@/ui/fonts";
import { Analytics } from "@vercel/analytics/react";

import { TooltipProvider } from "@/components/ui/tooltip";
import Head from "next/head";

interface ExtendedMetadata extends Metadata {
  icons: {
    icon: string;
    apple: string;
    android: string[];
  };
}

export const metadata: ExtendedMetadata = {
  title: "EasyKit",
  description:
    "EasyKit provides a collection of simple, fast, and reliable solutions to help you streamline your tasks. Whether it's converting documents, generating QR codes, or solving other everyday challenges, our platform offers the tools you need to get things done effortlessly.",
    keywords: [
      "EasyKit",
      "document conversion",
      "QR code generator",
      "video generator",
      "currency converter",
      "image converter",
      "IP information extractor",
      "domain info extractor",
      "YouTube tags extractor",
      "PDF to Word conversion",
      "Word to PDF conversion",
      "AI image generator",
      "online tools",
      "productivity tools",
      "digital tools",
      "online converter",
      "instant solutions",
      "task management",
      "document tools",
      "image tools",
      "media tools",
      "QR code generator online",
      "convert PDF to Word",
      "convert Word to PDF",
      "video tools",
      "YouTube video tools",
      "IP address information",
      "extract domain info",
      "video content tools",
      "document converters",
      "image conversion tool",
      "video creation tools",
      "currency exchange tools",
      "online currency converter",
      "domain name information",
      "extract YouTube tags",
      "extract domain data",
      "PDF converter",
      "image file converter",
      "AI-powered image tools",
      "convert Word to PDF online",
      "free PDF to Word conversion",
      "YouTube tag generator",
      "online image converter",
      "currency conversion online",
      "QR code creator",
      "generate PDF from Word",
      "Word to PDF online",
      "image to PDF conversion",
      "YouTube video optimization",
      "image to JPG converter",
      "convert JPG to PDF",
      "convert PNG to PDF",
      "convert PNG to JPG",
      "AI-powered image creation",
      "video to MP4 converter",
      "Word to image converter",
      "online video generator",
      "AI video generator",
      "domain name lookup",
      "QR code creator tool",
      "free QR code generator",
      "YouTube optimization",
      "domain info checker",
      "image compression tool",
      "JPG to PNG converter",
      "PNG to JPG conversion",
      "currency exchange rates",
      "real-time currency converter",
      "PDF to Word file converter",
      "instant document converter",
      "tool for converting Word to PDF",
      "PDF to Word conversion online",
      "AI-generated images",
      "YouTube SEO",
      "video marketing tools",
      "IP address details",
      "domain lookup tool",
      "online video tools",
      "video content creators",
      "digital content creation",
      "PDF creator",
      "Word document tools",
      "image and video converter",
      "image resizing tool",
      "document conversion tool",
      "PDF tools",
      "AI art generation",
      "text to image AI",
      "video editing tools",
      "digital asset management",
      "currency rate tool",
      "multi-currency converter",
      "video content management",
      "domain registration tools",
      "image format converter",
      "text to image generator",
      "YouTube SEO tool",
      "PDF to Word converter free",
      "convert Word documents to PDF",
      "domain whois checker",
      "currency tools online",
      "video to image converter",
      "image to Word converter",
      "website SEO tools",
      "file converter tool",
      "convert image to PDF",
      "image converter online",
      "convert Word to JPG",
      "currency converter app",
      "online toolset",
      "easy online tools",
      "video creation suite",
      "file conversion tools",
      "image editing tools",
      "document processing tools",
      "QR code generator free",
      "PDF file converter",
      "text to image AI generator",
      "video marketing software",
      "currency converter for websites",
      "QR code creation tools",
      "bulk PDF conversion",
      "bulk file converter",
      "online image editor",
      "AI art tools",
      "video file generator",
      "file format conversion",
      "file conversion service",
      "currency exchange rates app",
      "file conversion website",
      "domain lookup free",
      "YouTube SEO tags",
      "Word to image converter online",
      "currency rate comparison",
      "YouTube video optimizer",
      "image format tool",
      "online video creator",
      "digital content tools",
      "document processing services",
      "currency exchange online",
      "video content optimization",
      "file conversion online",
      "free YouTube tags generator",
      "image and video file conversion",
      "IP lookup service",
      "currency exchange calculator",
      "QR code for website",
      "domain name lookup free",
      "video editing and creation",
      "PDF to Word converter online free",
      "document toolset",
      "file converter for images",
      "online tools for documents",
      "Word to PDF converter free",
      "AI-generated content tools",
      "free document conversion",
      "website content creation",
      "image compression and conversion",
      "free online image converter",
      "video file creator",
      "document conversion for business",
      "online QR code generator",
      "multi-format image converter",
      "image resolution tool",
      "online currency conversion tools",
      "document editing tools",
      "image file creator",
      "Word to PDF document generator",
      "AI image generation tool",
      "video generator app",
      "domain lookup services",
      "extract YouTube tags tool",
      "convert image to Word",
      "YouTube marketing tool",
      "video editing apps",
      "currency exchange tools online",
      "IP info extractor tool",
      "currency conversion for websites",
      "video converter online",
      "PDF editing tools",
      "domain info checker online",
      "document to Word conversion tools",
      "QR code for business",
      "AI image creator",
      "online domain information lookup",
      "currency rate comparison tool",
      "video creation platform",
      "online video editor",
      "document management tools",
      "currency rate tool for business",
      "video to Word converter",
      "YouTube optimization tools",
      "image to PNG conversion",
      "convert PNG to JPG online",
      "free image converter",
      "free PDF to Word conversion tool",
      "video and image tools",
      "image to video converter",
      "document converter website",
      "QR code for business cards",
      "AI image tools online",
      "document and file management tools",
      "YouTube SEO tools online",
      "video file converter online",
      "extract IP information",
      "Word to PDF document creation",
      "online image tools free",
      "instant document conversion",
      "YouTube tags generator tool",
      "online currency exchange",
      "video to MP3 converter",
      "image to video file converter",
      "video conversion and editing",
      "AI-powered video tools",
      "document converter suite",
      "free YouTube SEO tool",
      "domain and website info extractor",
      "convert image files online",
      "online QR code creation tool",
      "video optimization tools",
      "bulk image converter",
      "bulk document converter",
      "image file tools",
      "free online PDF to Word converter",
      "video file tools",
      "free AI image generator",
      "multi-purpose image and video tools",
      "image conversion software",
      "real-time currency conversion",
      "PDF to Word document generator",
      "video creation and editing tools",
      "image compression and conversion tool",
      "image resolution online tool",
      "image format changing tool",
      "convert Word to PNG",
      "QR code maker free",
      "online PDF tools",
      "video editing for creators",
      "image to video file conversion",
      "YouTube tag extractor online",
      "image conversion and optimization",
      "free video generator",
      "currency converter for businesses",
      "QR code creator online",
      "AI-powered image editing",
      "document tools online",
      "image to document conversion",
      "YouTube tag optimization",
      "online file conversion tools",
      "image to PDF document",
      "Word document creation tools",
      "YouTube tag creator",
      "video tag generator",
      "Word to PDF creator online",
      "document conversion platform",
      "video tools for marketing",
      "currency exchange rates converter",
      "file format changer tool",
      "image format conversion website",
      "video converter free online",
      "document tools for business",
      "image converter app",
      "video file conversion online",
      "website tools for SEO",
      "document and video tools",
      "online document editing",
      "image editing software",
      "real-time currency rate conversion",
      "online tools for productivity",
      "free video file creator",
      "AI-powered QR code generator",
      "image compression and resizing",
      "multi-format image and video converter",
      "document management software",
      "image format conversion website",
      "domain name lookup tool",
      "YouTube SEO optimizer",
      "free video converter tool",
      "image and video optimization tools",
      "domain information checker",
      "online QR code creation",
      "Word to PDF generator free",
      "video conversion and editing app",
      "document to PDF converter",
      "free currency conversion app",
      "video generator tool",
      "document converter tool free",
      "image conversion app",
      "YouTube tags generator free",
      "file conversion and editing tools",
      "online currency converter tool",
      "free image file converter",
      "video tools online",
      "online currency rate comparison",
      "domain name registration tools",
      "document format conversion",
      "video tools for SEO",
      "online image compression tools",
      "convert Word to image online",
      "video and image conversion tool",
    ],
  

  // Additional Meta Tags for SEO and Social Sharing
  icons: {
    icon: "/favicon.ico", // Favicon for all platforms
    apple: "/apple-touch-icon.png", // Apple-specific icon
    android: [
      // Android-specific icons
      "/android-chrome-192x192.png",
      "/android-chrome-512x512.png",
    ],
  },

  // Open Graph Meta Tags for SEO and Social Sharing
  openGraph: {
    title: "EasyKit - Simplify Your Everyday Tasks",
    description:
      "Discover EasyKit, your all-in-one platform for quick and reliable solutions. Streamline your daily challenges with ease.",
    url: "https://easykit.codewithtabish.com/", // Updated to your deployed URL
    images: [
      {
        url: "https://easykit.codewithtabish.com/meta-image.jpg", // Updated to your deployed image URL
        width: 1200,
        height: 630,
        alt: "EasyKit - Streamline Your Tasks with Ease",
      },
    ],
    type: "website",
    siteName: "EasyKit",
  },

  // Twitter Card Meta Tags for Sharing
  twitter: {
    card: "summary_large_image",
    title: "EasyKit - Your Go-To Platform for Everyday Solutions",
    description:
      "Simplify your tasks with EasyKit. Explore tools designed for efficiency, reliability, and speed.",
    images: ["https://easykit.codewithtabish.com/meta-image.png"], // Updated to your deployed image URL
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Head>
          <title>{String(metadata.title ?? "")}</title>

          <meta name="description" content={metadata.description ?? ""} />
          {/* Keywords with fallback to empty string if null/undefined */}
          <meta
            name="keywords"
            content={
              Array.isArray(metadata.keywords)
                ? metadata.keywords.join(", ")
                : metadata.keywords ?? ""
            }
          />
          <meta name="author" content="Code with Tabish" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />

          {/* Keywords */}

          {/* You can add more meta tags as needed */}
        </Head>
      </head>
      <body className={`${lusitana.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" ">
            <TooltipProvider>
              <MobileHeader />
              <NavBar />
              {children}
              <Analytics />
            </TooltipProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// npm install react@18.2.0 react-dom@18.2.0 framer-motion@11.13.1

// Chrome: Ctrl+Shift+R (or Cmd+Shift+R on Mac).
