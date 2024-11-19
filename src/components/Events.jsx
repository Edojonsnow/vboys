import React from "react";
import EventCard from "./EventCard";
import EmblaCarousel from "./Carousel";
import Nav from "./Nav";

const Events = () => {
  const OPTIONS = { align: "start" };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="mt-4 px-4">
      <h1 className="text-white">EVENTS</h1>
      {/* <p>Upcoming events and cookouts</p> */}
      <div className=" flex gap-4 ">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Events;
