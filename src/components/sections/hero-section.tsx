"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function HeroSection() {
  return (
    <section className="max-w-6xl w-full min-h-screen pt-32 mx-auto px-4 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Muhammad Rayandika
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold tracking-tight text-purple-300 mt-2">
              Frontend Developer & UI Designer
            </h2>
          </div>

          <p className="text-lg text-gray-300 max-w-xl">
            Passionate about creating intuitive and beautiful web experiences. I
            transform complex ideas into clean, responsive, and user-friendly
            interfaces.
          </p>

          <div className="flex items-center gap-4 pt-6">
            <Link href="https://github.com/yourusername" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank">
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>

            <Button className="ml-4">Download CV</Button>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="w-64 h-64 bg-purple-300/20 rounded-full flex items-center justify-center">
            <div className="w-56 h-56 bg-purple-300/40 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-purple-300/60 rounded-full overflow-hidden">
                {/* You can replace this with an actual image */}
                <img
                  src="/avatar.jpg"
                  alt="Muhammad Rayandika"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
