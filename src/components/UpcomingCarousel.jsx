"use client";
import React from "react";
import { DotButton, useDotButton } from "./CarouselDots";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrow";
import useEmblaCarousel from "embla-carousel-react";
import EventCard from "./EventCard";

const UpcomingCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const events = [
    {
      title: "Dirty Sexy Rave",
      date: "30th November, 2024",
      location: "2 Adeola Odeku, VI, Lagos",
      ticketLink: "https://tix.africa/discover/dsr",
      imageSrc: "/dsr_24.png",
      hideVideo: "none",
    },
    {
      title: "Street Souk",
      date: "18th Dcember, 2024",
      location: "Harbour Point, VI, Lagos",
      ticketLink: "https://example.com/ticket",
      imageSrc: "/streetsouk_vogueboys.jpeg",
      hideVideo: "none",
    },
  ];

  return (
    <section className="embla overflow-hidden w-full max-w-6xl mx-auto relative px-4">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {events.map((event, index) => (
            <div className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4" key={index}>
              <EventCard
                eventTitle={event.title}
                date={event.date}
                location={event.location}
                imageSrc={event.imageSrc}
                hideVideo={event.hideVideo}
                ticketLink={event.ticketLink}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          {prevBtnDisabled ? (
            ""
          ) : (
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          )}
          {nextBtnDisabled ? (
            ""
          ) : (
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          )}
        </div>
        <div className="embla__bottom-dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
      <hr className="mt-4 border-[#FDF9BB]" />
    </section>
  );
};

export default UpcomingCarousel;
