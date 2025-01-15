"use client";
import { client } from "@/sanity/lib/client";
import { EVENT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Midpage() {
  const [eventInfo, setEventInfo] = useState(null);

  const fetchEventInfo = async () => {
    try {
      // Fetch specific image
      const eventInfo = await client.fetch(EVENT_QUERY);
      setEventInfo(eventInfo);
    } catch (error) {
      console.error("Error fetching banner:", error);
    }
  };

  useEffect(() => {
    fetchEventInfo();
  }, [eventInfo]);

  return (
    <div className="relative h-fit mt-4">
      <div className=" w-full h-[300px] md:h-[488px] lg:h-[670px] relative">
        <Image
          src="/ib-header.jpg"
          alt=""
          className=" object-cover object-top "
          fill
        />
      </div>
      <Link href={eventInfo ? eventInfo.eventUrl : "#"}>
        <button className="absolute bottom-16 font-semibold left-1/2 transform -translate-x-1/2 bg-bg w-fit px-8 py-4 rounded-[10px] text-black">
          RSVP
        </button>
      </Link>
    </div>
  );
}

export default Midpage;
