"use client";
import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax-like feel or just static for now */}
      <div className="absolute inset-0 w-full h-full z-0">
         <Image 
            src="/newHero.jpg" // Using an existing stylish image or placeholder
            alt="About Hero" 
            fill 
            className="object-cover opacity-60"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="text-neon-yellow font-bold tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
            Our Story
        </h2>
        <h1 className="text-white font-outfit font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            DEFINING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-white">NIGHTLIFE.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
            From an invite-only gathering to a cultural phenomenon.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
