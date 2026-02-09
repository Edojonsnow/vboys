"use client";
import React, { useRef, useState } from "react";
import { IconPlayerPlay, IconVolume } from "@tabler/icons-react";

const VideoCard = ({ src, alt }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play on hover logic
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-neon-yellow/30 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loop
        muted
        playsInline
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
         <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <IconPlayerPlay className="text-white fill-white ml-1" />
         </div>
      </div>
      
      {/* Title/Label */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-outfit font-bold text-lg">{alt}</h3>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  const videos = [
    { id: 1, src: "https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-party-4416-large.mp4", title: "SUMMER VIBES" },
    { id: 2, src: "https://assets.mixkit.co/videos/preview/mixkit-concert-crowd-lights-2089-large.mp4", title: "CONCERT CROWD" },
    { id: 3, src: "https://assets.mixkit.co/videos/preview/mixkit-crowd-cheering-at-night-concert-4043-large.mp4", title: "NIGHT LIFE" },
     { id: 4, src: "https://assets.mixkit.co/videos/preview/mixkit-dj-playing-music-at-nightclub-4054-large.mp4", title: "DJ SETS" },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-black to-deep-purple/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-neon-yellow font-bold tracking-[0.3em] text-sm mb-3">EXPERIENCE THE HYPE</h2>
          <h1 className="text-white font-outfit font-black text-5xl md:text-8xl uppercase">
            The Vibe
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid) => (
            <VideoCard key={vid.id} src={vid.src} alt={vid.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
