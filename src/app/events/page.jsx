import EmblaCarousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PastCarousel from "@/components/PastCarousel";
import UpcomingCarousel from "@/components/UpcomingCarousel";
import VbVirtual from "@/components/VbVirtual";
import React from "react";

const Events = () => {
  return (
    <div>
      <Nav />

      <div className="pt-16 px-4">
        <div>
          <h1 className="text-white"> PAST EVENTS</h1>
          <PastCarousel />
        </div>
        <div>
          <h1 className="text-white"> UPCOMING EVENTS</h1>
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
