"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

const Hero = ({ hideVideo }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  const iframeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
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
      <div className="w-full h-[500px] md:h-[300px] lg:h-[500px]   relative flex justify-center">
        {isSmallScreen ? (
          <Image
            className={` object-fill`}
            src="/hero-mobile2.jpeg"
            alt="hero-image"
            fill
          />
        ) : (
          <Image
            className={` object-cover`}
            src="/newHero.jpg"
            alt="hero-image"
            fill
          />
        )}
        {/* <Image
          className="md:object-cover md:object-right-bottom"
          src={isSmallScreen ? "/hero-mobile2.jpeg" : "/newHero.jpg "}
          alt="hero-image"
          fill
        /> */}

        {isClicked && (
          <iframe
            ref={iframeRef}
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            src="https://player.vimeo.com/video/1034774092?controls=0&autoplay=1&h=397876b157&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; clipboard-write"
            title="vb-hero-vid"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              minWidth: "100%",
              minHeight: "100%",
              width: "auto",
              height: "auto",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
            }}
            allowFullScreen
          ></iframe>
        )}

        {/* <button
          onClick={() => setIsClicked(!isClicked)}
          className={` absolute ${isClicked ? "top-3/4 animate-none " : "top-40 animate-bounce"}    
             py-4 px-5 text-[12px] font-helv cursor-pointer rounded-2xl bg-bg lg:p-5 hover:scale-110  hover:bg-black hover:text-bg transition-all duration-300`}
          style={{ display: hideVideo }}
        >
          {!isClicked ? "CLICK ME" : "STOP PLAYBACK"}
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
