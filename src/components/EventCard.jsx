"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IconLocation, IconMapPin, IconTicket } from "@tabler/icons-react";

const EventCard = ({ eventTitle, date, location, ticketLink }) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const imageSrc = "/api/placeholder/400/300";
  const videoSrc = "your-video-url.mp4";

  const handleMouseEnter = () => {
    setIsHovering(true);
    // Ensure immediate playback
    if (videoRef.current) {
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
    <div className="w-fit">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-[342px] h-[400px] "
      >
        {isHovering ? (
          <video
            ref={videoRef}
            playsInline
            width="1000"
            height="400"
            muted
            controls={false} // Removes the controls
            preload="auto"
          >
            <source src="/vogue-vid1.MP4" type="video/mp4" />
          </video>
        ) : (
          <Image
            className="object-fit"
            src="/slider-6.png"
            alt="event image"
            fill
          />
        )}
      </div>
      <div className="flex justify-between">
        <h3 className="text-white">{eventTitle}</h3>
        <div className="flex cursor-pointer gap-2">
          <IconTicket stroke={2} color="#faed25" />
          <p className="text-bg">Ticket</p>
        </div>
      </div>
      <div className=" flex flex-col gap-0">
        <p className="text-bg"> {date}</p>
        <div className="flex">
          <IconMapPin stroke={2} color="#faed25" />
          <p className="text-white"> {location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
