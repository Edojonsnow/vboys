"use client";
import { client, urlFor } from "@/sanity/lib/client";
import { EVENT_QUERY, UPCOMINGEVENT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Midpage() {
  const [eventImage, setEventImage] = useState([]);

  const fetchUpcomingEventImage = async () => {
    try {
      // Fetch specific image
      const eventInfo = await client.fetch(UPCOMINGEVENT_QUERY);
      setEventImage(eventInfo);
      console.log(eventImage);
    } catch (error) {
      console.error("Error fetching banner:", error);
    }
  };

  useEffect(() => {
    fetchUpcomingEventImage();
  }, []);

  return (
    <div className="relative h-fit ">
      <div className={`w-full h-[193px] md:h-[384px] lg:h-[700px] relative`}>
        {eventImage.length !== 0 && (
          <Image
            src={urlFor(eventImage.mainImage).url()}
            alt=""
            className="  object-top "
            fill
          />
        )}
      </div>
      <Link href={eventImage.eventUrl || "#"}>
        <button className="absolute bottom-16 font-semibold left-1/2 transform -translate-x-1/2 bg-bg w-fit px-4 py-2 md:px-8 md:py-4 rounded-[10px] text-black">
          RSVP
        </button>
      </Link>
    </div>
  );
}

export default Midpage;
