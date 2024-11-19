"use client";
import React from "react";
import { DotButton, useDotButton } from "./CarouselDots";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrow";
import useEmblaCarousel from "embla-carousel-react";
import EventCard from "./EventCard";

const EmblaCarousel = (props) => {
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
      title: "Vogue boys Easter Cookout",
      date: "24th January, 2023",
      location: "Amore Gardens, Lagos",
      ticketLink: "https://example.com/ticket",
    },
    {
      title: "Vogue boys Summer Cookout",
      date: "22th January, 2023",
      location: "Amore Gardens, Lagos",
      ticketLink: "https://example.com/ticket",
    },
    {
      title: "Vogue boys Easter Cookout",
      date: "24th January, 2023",
      location: "Amore Gardens, Lagos",
      ticketLink: "https://example.com/ticket",
    },
    {
      title: "Vogue boys Easter Cookout",
      date: "24th January, 2023",
      location: "Amore Gardens, Lagos",
      ticketLink: "https://example.com/ticket",
    },
    {
      title: "Vogue boys Easter Cookout",
      date: "24th January, 2023",
      location: "Amore Gardens, Lagos",
      ticketLink: "https://example.com/ticket",
    },
  ];

  return (
    <section className="embla overflow-hidden relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {events.map((event, index) => (
            <EventCard
              key={index}
              eventTitle={event.title}
              date={event.date}
              location={event.location}
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

        <div className="embla__dots">
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
    </section>
  );
};

export default EmblaCarousel;
