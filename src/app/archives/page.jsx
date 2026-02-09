"use client";
import React, { useState, useRef } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { IconPlayerPlay } from "@tabler/icons-react";

// Reusing VideoCard logic for consistency
const ArchiveCard = ({ src, title, type, isVideo = true, imageSrc }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isVideo && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-neon-yellow/30 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loop
          muted
          playsInline
        />
      ) : (
        <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Overlay for Video Play Icon */}
      {isVideo && (
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <IconPlayerPlay className="text-white fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-neon-yellow text-xs font-bold tracking-widest mb-1 uppercase">
          {type}
        </p>
        <h3 className="text-white font-outfit font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
};

const ArchiveModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="M6 6 18 18" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {item.isVideo ? (
          <video
            src={item.src}
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-bold text-xl">{item.title}</h3>
            <p className="text-neon-yellow text-sm font-bold tracking-widest uppercase">{item.type}</p>
        </div>
      </div>
    </div>
  );
};

const Archives = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState(null);

  const tabs = ["ALL", "COOKOUTS", "DIRTY SEXY RAVE", "SOUNDLAND"];

  // Placeholder data using the user's available files
  const mediaItems = [
    {
      id: 1,
      type: "COOKOUTS",
      title: "Summer Cookout '24",
      src: "/hero-vid.MP4",
      isVideo: true,
    },
    {
      id: 2,
      type: "DIRTY SEXY RAVE",
      title: "DSR: The Awakening",
      src: "/hero-vid2.MP4",
      isVideo: true,
    },
    {
      id: 3,
      type: "SOUNDLAND",
      title: "Soundland Festival",
      src: "/hero-vid.MP4", // Reusing for placeholder
      isVideo: true,
    },
    {
      id: 4,
      type: "COOKOUTS",
      title: "Easter Special",
      imageSrc: "/easter_cookout.jpeg",
      isVideo: false,
    },
    {
      id: 5,
      type: "DIRTY SEXY RAVE",
      title: "DSR London",
      src: "/hero-vid2.MP4", // Reusing
      isVideo: true,
    },
    {
      id: 6,
      type: "SOUNDLAND",
      title: "Vibes on Vibes",
      imageSrc: "/streetsouk_vogueboys.jpeg",
      isVideo: false,
    },
  ];

  const filteredItems =
    activeTab === "ALL"
      ? mediaItems
      : mediaItems.filter((item) => item.type === activeTab);

  return (
    <div className="min-h-screen bg-black">
      <Nav />
      {/* Header Section */}
      <div className="pt-32 pb-12 px-6 container mx-auto text-center">
        <h1 className="text-white font-outfit font-black text-5xl md:text-8xl tracking-tighter mb-4">
          ARCHIVES
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
          Relive the energy. Unfiltered moments from our history.
        </p>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-neon-yellow text-black border-neon-yellow"
                  : "bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} onClick={() => setSelectedItem(item)}>
              <ArchiveCard
                src={item.src}
                imageSrc={item.imageSrc}
                title={item.title}
                type={item.type}
                isVideo={item.isVideo}
              />
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
            <div className="text-center text-gray-500 py-20">
                <p>No archives found for this category yet.</p>
            </div>
        )}
      </div>

      <Footer />
      
      {/* Modal */}
      {selectedItem && (
        <ArchiveModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Archives;
