"use client"
import Link from 'next/link'
import React from 'react'
import { NavigationMenuDemo } from './DropDownMenuHeader'
import { Button } from '../ui/button'
import { ModeToggle } from './ModeToggle'
import { useTheme } from 'next-themes'
const NavBar = () => {
  const theme=useTheme()
  return (
    <div className='hidden md:block '>
        <header className=" body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center  mb-4 md:mb-0">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
  viewBox="0 0 24 24"
>
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>

      <span className="ml-3 text-xl">Tailblocks</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l 	flex flex-wrap items-center text-base justify-center">
    <div className="flex items-center gap-4">
          <Link href="#">
          <NavigationMenuDemo/>
          </Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About Us</Link>
        </div>
    </nav>
    <div className="flex items-center gap-2">
          <ModeToggle/>
          <Button variant={theme.theme=="dark"?"outline":"default"}>
            login
          </Button>

        </div>
  </div>
</header>
      
    </div>
  )
}

export default NavBar
