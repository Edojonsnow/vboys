"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    console.log(isClicked);
    if (isClicked) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isClicked]);

  return (
    <div>
      <div className="w-full h-[600px] relative flex justify-center">
        {/* <Image
          className="object-cover"
          src="/newHero.jpg"
          alt="hero-image"
          fill
        /> */}
        <video
          ref={videoRef}
          className=" object-cover  lg:object-fill"
          width="1440"
          playsInline
          loop
          controls={false} // Removes the controls
          preload="auto"
        >
          <source src="/vb-hero-vid.MOV" type="video/mp4" />
        </video>
        <button
          onClick={() => setIsClicked(!isClicked)}
          className="absolute top-20 cursor-pointer bg-bg p-5"
        >
          {!isClicked ? "Click me" : "Stop Playback"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
