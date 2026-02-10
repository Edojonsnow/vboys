"use client";
import EmblaCarousel from "@/components/Carousel";
import EventsHeader from "@/components/EventsHeader";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PastCarousel from "@/components/PastCarousel";
import UpcomingCarousel from "@/components/UpcomingCarousel";
import VbVirtual from "@/components/VbVirtual";
import React from "react";

const Events = () => {
  return (
    <div className="">
      <Nav />
      <EventsHeader />

      <div className="pt-10 px-4 md:px-8">
        <div className="mt-6 flex flex-col mb-20 lg:mb-0 ">
          <h1 className="text-[#FEFCDE] font-semibold mx-auto mb-2 w-full max-w-6xl">
            <span className="md:hidden">PAST</span>
            <span className="hidden md:inline">PAST EVENTS</span>
          </h1>
          <PastCarousel />
        </div>
        <div className="mt-6 mb-12 flex flex-col">
          <h1 className="text-[#FEFCDE] w-full max-w-6xl mb-2 font-semibold mx-auto">
            <span className="md:hidden">UPCOMING</span>
            <span className="hidden md:inline">UPCOMING EVENTS</span>
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
