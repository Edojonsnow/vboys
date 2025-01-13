"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const VbVirtual = ({ imageSrc, mobileSrc }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(null);

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
  }, []);
  return (
    <div className="relative mt-4 w-full h-[450px] md:h-[278px] lg:h-[450px]">
      <Image src={isSmallScreen ? mobileSrc : imageSrc} alt="VB VIRTUAL" fill />
      <button className=" absolute text-sm lg:text-lg bg-bg font-helv px-7 py-3 rounded-xl bottom-52 right-1/2 translate-x-1/2 hover:scale-110 hover:bg-black hover:text-bg hover:border hover:border-bg transition-all duration-300   lg:bottom-10 lg:right-[17%]">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default VbVirtual;
