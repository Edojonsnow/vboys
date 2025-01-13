"use client";
import React from "react";
import { DotButton, useDotButton } from "./CarouselDots";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrow";
import useEmblaCarousel from "embla-carousel-react";
import EventCard from "./EventCard";

const PastCarousel = (props) => {
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
      title: "Silent Rage: Street Souk",
      date: "17th December, 2023",
      location: "Harbour Point, VI, Lagos",
      ticketLink: "https://example.com/ticket",
      imageSrc: "/tix_6.png",
      hideVideo: "none",
    },
    {
      title: "Easter Cookout",
      date: "10th April, 2023",
      location: "Amore Gardens, Lagos",
      ticketLink: "https://example.com/ticket",
      imageSrc: "/easter_cookout.jpeg",
      hideVideo: "",
    },
    {
      title: "We Go Again 2023",
      date: "7th January, 2023",
      location: "Secret Beach, Lagos",
      ticketLink: "https://example.com/ticket",
      imageSrc: "/wegoagain.jpeg",
      hideVideo: "none",
    },
    {
      title: "Silent Rage: Street Souk",
      date: "18th December, 2022",
      location: "Harbour Point, VI, Lagos",
      ticketLink: "https://example.com/ticket",
      imageSrc: "/tix_5.png",
      hideVideo: "none",
    },
  ];

  return (
    <section className="embla overflow-hidden w-[350px] md:w-[700px] lg:w-[1060px] mx-auto  relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              eventTitle={event.title}
              date={event.date}
              location={event.location}
              imageSrc={event.imageSrc}
              hideVideo={event.hideVideo}
              ticketLink={event.ticketLink}
            />
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

export default PastCarousel;
