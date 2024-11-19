import EmblaCarousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import VbVirtual from "@/components/VbVirtual";
import React from "react";

const Events = () => {
  return (
    <div>
      <Nav />

      <div className="pt-16 px-4">
        <div>
          <h1 className="text-white"> PAST EVENTS</h1>
          <EmblaCarousel />
        </div>
        <div>
          <h1 className="text-white"> UPCOMING EVENTS</h1>
          <EmblaCarousel />
        </div>
        <VbVirtual />
        <Footer />
      </div>
    </div>
  );
};

export default Events;
