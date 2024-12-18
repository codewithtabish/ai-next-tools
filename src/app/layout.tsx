import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import NavBar from "@/components/custom/Navbar";
import MobileHeader from "@/components/custom/MobileHeader";
import { lusitana, outfit } from '@/ui/fonts';
import { Analytics } from "@vercel/analytics/react"

import {
  TooltipProvider,
} from "@/components/ui/tooltip"



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${lusitana.className} antialiased`}>

         <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
    <div className=' '>
      <TooltipProvider>
      <MobileHeader/>
      <NavBar/>
      {children}
    </TooltipProvider>
      </div>
      </ThemeProvider>
    </body>
  </html>
  );
}



// npm install react@18.2.0 react-dom@18.2.0 framer-motion@11.13.1
