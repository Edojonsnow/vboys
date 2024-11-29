"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Hero = ({ hideVideo }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  const videoRef = useRef(null);

  useEffect(() => {
    if (isClicked) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    if (isSmallScreen) {
    } else {
    }
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClicked, isSmallScreen]);

  return (
    <div>
      <div className="w-full  h-[480px] relative flex justify-center">
        {isSmallScreen ? (
          <Image
            className={`${isClicked ? "hidden" : "object-fill"}`}
            src="/hero-mobile2.jpeg"
            alt="hero-image"
            fill
          />
        ) : (
          <Image
            className={`${isClicked ? "hidden" : "object-cover"}`}
            src="/newHero.jpg"
            alt="hero-image"
            fill
          />
        )}

        <video
          ref={videoRef}
          className=" object-contain "
          playsInline
          loop
          controls={false}
          preload="auto"
          style={{ display: hideVideo }}
        >
          <source src="/videos/vb-hero-vid.MOV" type="video/mp4" />
        </video>

        <button
          onClick={() => setIsClicked(!isClicked)}
          className="absolute top-40 font-helv cursor-pointer rounded-2xl bg-bg p-5 hover:scale-110 hover:bg-black hover:text-bg transition-all duration-300"
          style={{ display: hideVideo }}
        >
          {!isClicked ? "CLICK ME" : "STOP PLAYBACK"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
