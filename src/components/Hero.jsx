"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top scale-105 transform" 
        >
          <source src="/hero-vid.MP4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 animate-fade-in-up">
        <h2 className="text-neon-yellow font-outfit font-bold tracking-[0.2em] text-sm md:text-lg mb-4 animate-pulse">
          NEXT GENERATION EVENTS
        </h2>
        <h1 className="text-white font-outfit font-extrabold text-5xl md:text-8xl lg:text-9xl tracking-tight mb-8 leading-none">
          EXPERIENCE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
            THE UNREAL
          </span>
        </h1>
        <p className="text-gray-300 font-light text-lg md:text-2xl max-w-2xl mb-10 tracking-wide">
          Immersive parties, curated vibes, and unforgettable nights.
        </p>
        <button className="bg-neon-yellow text-black font-outfit font-bold text-lg px-10 py-5 rounded-full hover:scale-110 hover:shadow-[0_0_30px_rgba(250,237,37,0.6)] transition-all duration-300">
          GET TICKETS
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Image src="/down-arrow.svg" width={32} height={32} alt="Scroll" className="opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
