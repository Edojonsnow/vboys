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
    <div className="mt-4 px-4">
      <Link href="/events">
        {" "}
        <h1 className="text-white"> EVENTS</h1>
      </Link>
      {/* <p>Upcoming events and cookouts</p> */}
      <div className=" flex gap-4 ">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Events;
