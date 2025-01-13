"use client";
import EmblaCarousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PastCarousel from "@/components/PastCarousel";
import UpcomingCarousel from "@/components/UpcomingCarousel";
import VbVirtual from "@/components/VbVirtual";
import React, { useEffect, useState } from "react";

const Events = () => {
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
  }, [isSmallScreen]);

  return (
    <div className="">
      <Nav />

      <div className="pt-16">
        <div className="mt-6 flex flex-col mb-20 lg:mb-0 ">
          <h1 className="text-[#FEFCDE] font-semibold mx-auto mb-2 lg:w-[1060px]  ">
            {isSmallScreen ? " PAST" : "PAST EVENTS"}
          </h1>
          <PastCarousel />
        </div>
        <div className="mt-6 mb-12 flex flex-col">
          <h1 className="text-[#FEFCDE] lg:w-[1060px] mb-2 font-semibold  mx-auto">
            {" "}
            {isSmallScreen ? " UPCOMING" : "UPCOMING EVENTS"}
          </h1>
          <UpcomingCarousel />
        </div>
        <VbVirtual
          imageSrc="/footer-pic.png"
          mobileSrc="/vbvirtual-mobile.svg"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Events;
