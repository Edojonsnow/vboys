import React from "react";
import EventCard from "./EventCard";
import EmblaCarousel from "./Carousel";
import Nav from "./Nav";
import Link from "next/link";

const Events = () => {
  const OPTIONS = { align: "start" };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="mt-16 mx-4 flex flex-col">
      <h1 className="text-[#FEFCDE] font-semibold  mx-auto  lg:w-[1060px]">
        EVENTS
      </h1>

      {/* <p>Upcoming events and cookouts</p> */}
      <div className=" flex gap-4 ">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Events;
