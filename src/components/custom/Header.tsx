"use client"
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { ModeToggle } from './ModeToggle';
import { NavigationMenuDemo } from './DropDownMenuHeader';

const Header = () => {
  return (
    <div className="shadow-sm">
      <div className="container mx-auto flex items-center justify-between lg:p-5">
        {/* Left Side - Navigation Links */}
        <div className="flex items-center gap-4">
          <Link href="#">
          <NavigationMenuDemo/>
          </Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About Us</Link>
        </div>

        {/* Right Side - Action Buttons */}
        <div className="flex items-center gap-2">
          <ModeToggle/>
          <Button>
            <span className="dark:text-gray-200">Login</span>
          </Button>
          {/* <Button>
          <span className="dark:text-gray-200">SignUp</span>

          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
