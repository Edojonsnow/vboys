"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import VideoJS from "./Video";
import videojs from "video.js";

const Hero = ({ hideVideo }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  const videoRef = useRef(null);

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/vb-hero-vid.MOV",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    if (isClicked) {
      player.play();
    } else {
      player.pause();
    }

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  useEffect(() => {
    // if (isClicked) {
    //   videoRef.current.play();
    // } else {
    //   videoRef.current.pause();
    //   videoRef.current.currentTime = 0;
    // }

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
        {isClicked && (
          <VideoJS
            options={videoJsOptions}
            onReady={handlePlayerReady}
            style={{ display: hideVideo }}
          />
        )}
        {/* <source src="/vb-hero-vid.MOV" type="video/mp4" /> */}

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
