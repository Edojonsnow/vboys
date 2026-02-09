"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-neon-yellow shadow-[0_0_100px_rgba(250,237,37,0.3)]" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Brand Area */}
        <div className="text-center md:text-left">
          <div className="relative w-24 h-24 mb-4 mx-auto md:mx-0">
            <Image src="/vblogo.svg" alt="vboys logo" fill className="object-contain" />
          </div>
          <p className="text-gray-400 max-w-xs text-sm">
            Curating the best nightlife experiences since 2024. Next generation events for the digital age.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 md:gap-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs">Menu</h3>
            <Link href="/events" className="text-gray-400 hover:text-neon-yellow transition-colors text-sm">Events</Link>
            <Link href="/about" className="text-gray-400 hover:text-neon-yellow transition-colors text-sm">About</Link>
            <Link href="/" className="text-gray-400 hover:text-neon-yellow transition-colors text-sm">Contact</Link>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
             <h3 className="text-white font-bold uppercase tracking-widest text-xs">Legal</h3>
            <Link href="/" className="text-gray-400 hover:text-neon-yellow transition-colors text-sm">Privacy</Link>
            <Link href="/" className="text-gray-400 hover:text-neon-yellow transition-colors text-sm">Terms</Link>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
           <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-yellow hover:text-black hover:scale-110 transition-all text-white">
                <IconBrandInstagram size={20} />
           </a>
           <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-yellow hover:text-black hover:scale-110 transition-all text-white">
                <IconBrandTwitter size={20} />
           </a>
           <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-yellow hover:text-black hover:scale-110 transition-all text-white">
                <IconBrandYoutube size={20} />
           </a>
        </div>
      </div>

      <div className="mt-20 text-center text-gray-600 text-[10px] uppercase tracking-widest">
        © 2026 Virtual Boys. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
