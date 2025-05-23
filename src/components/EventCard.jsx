"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IconLocation, IconMapPin, IconTicket } from "@tabler/icons-react";
import Link from "next/link";

const EventCard = ({
  eventTitle,
  date,
  location,
  ticketLink,
  imageSrc,
  hideVideo,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  // const imageSrc = "/api/placeholder/400/300";
  const videoSrc = "your-video-url.mp4";

  const handleMouseEnter = () => {
    setIsHovering(true);

    if (videoRef.current && hideVideo !== "none") {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="w-fit  ">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-[342px] h-[400px] "
      >
        {/* {isHovering && hideVideo !== "none" ? (
          <iframe
            src="https://player.vimeo.com/video/1034774205?muted=1&autoplay=1&controls=0&h=0e505cf1c0&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            width="342"
            height="400"
            title="vogue-vid1"
          ></iframe>
        ) : (
          <Image className="object-fit" src={imageSrc} alt="event image" fill />
        )} */}
        <Image
          className="object-fit hover:scale-105 transition-all duration-200"
          src={imageSrc}
          alt="event image"
          fill
        />
      </div>
      <div className="flex mt-4 justify-between">
        <h3 className="text-white font-semibold">{eventTitle}</h3>
        <Link href={ticketLink} className="flex cursor-pointer gap-2">
          <IconTicket stroke={2} color="#faed25" />
          <p className="text-bg">Ticket</p>
        </Link>
      </div>
      <div className=" flex flex-col gap-0">
        <p className="text-bg"> {date}</p>
        <div className="flex justify-between">
          <p className="text-white"> {location}</p>
          <IconMapPin stroke={2} color="#faed25" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
