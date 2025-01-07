"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0a0a1f]/80 backdrop-blur-sm">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/avatar.jpg" alt="Profile" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>

        <div className="flex gap-8">
          <Link
            href="/"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-purple-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/project"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
