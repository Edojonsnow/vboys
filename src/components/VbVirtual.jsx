"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const VbVirtual = ({ imageSrc, mobileSrc }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  useEffect(() => {
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
  }, []);
  return (
    <div
      className={`relative  w-full ${isSmallScreen ? "h-[400px]" : "h-[278px]"}  lg:h-[450px]`}
    >
      <Image
        src={isSmallScreen ? mobileSrc : imageSrc}
        alt="VB VIRTUAL"
        className=""
        fill
      />
      <button
        className={` ${isSmallScreen ? "right-1/2 translate-x-1/2 bottom-1/2" : " right-[16%] bottom-10"} absolute text-sm lg:text-lg bg-bg font-helv px-3 py-2 lg:px-7 lg:py-3   hover:scale-110 hover:bg-black hover:text-bg hover:border hover:border-bg transition-all duration-300   `}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default VbVirtual;
