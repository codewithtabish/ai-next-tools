"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>All Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li>
                <Link href="/tags">
                  <ListItem href="/tags" title="Tags Extractor">
                    Generate high-quality images using AI-powered tools.
                  </ListItem>
                </Link>
              </li>
              <li>
                <Link href="/qr">
                  <ListItem href="/qr" title="QR GENERATOR">
                    Quickly summarize long texts into concise and clear
                    summaries.
                  </ListItem>
                </Link>
              </li>
              <li>
                <Link href="/ip">
                  <ListItem href="/ip" title="IP INFORMATION">
                    Access detailed insights about your IP address, including
                    location, ISP, and network details.
                  </ListItem>
                </Link>
              </li>
              <li>
                <Link href="/domain">
                  <ListItem href="/domain" title="DOMAIN INFORMATION">
                    Extract and display detailed information about a domain,
                    including its registration, DNS records, and hosting
                    provider. Translate text between multiple languages
                    instantly.
                  </ListItem>
                </Link>
              </li>
              <li>
                <Link href="/image_createtor">
                  <ListItem href="/image_createtor" title="IMAGE CREATOR">
                    Generate custom AI-powered images based on your prompts and
                    ideas.
                  </ListItem>
                </Link>
              </li>
              <li>
              <Link href="/music">
                  <ListItem href="/music" title="MUSIC CREATOR">
                    Generate custom AI-powered music based on your prompts and
                    ideas.
                  </ListItem>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
