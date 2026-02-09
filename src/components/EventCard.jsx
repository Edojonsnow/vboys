"use client";
import Image from "next/image";
import Link from "next/link";
import { IconMapPin, IconTicket } from "@tabler/icons-react";

const EventCard = ({
  eventTitle,
  date,
  location,
  ticketLink,
  imageSrc,
}) => {
  return (
    <div className="group relative w-full bg-deep-purple/50 rounded-2xl overflow-hidden border border-white/5 hover:border-neon-yellow/50 hover:shadow-[0_0_20px_rgba(250,237,37,0.2)] transition-all duration-300 flex flex-col">
      {/* Image Container with Hover Zoom */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={imageSrc || "/event-placeholder.jpg"}
          alt={eventTitle || "Event Image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-neon-yellow text-black px-3 py-1 rounded-lg font-bold font-outfit text-sm shadow-lg">
          {date || "TBA"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between glass">
        <div>
          <h3 className="text-white font-outfit font-bold text-2xl mb-2 line-clamp-1 group-hover:text-neon-yellow transition-colors">
            {eventTitle || "Upcoming Event"}
          </h3>
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <IconMapPin size={18} className="text-neon-yellow" />
            <span className="text-sm font-light tracking-wide">{location || "Secret Location"}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={ticketLink || "/"}
          className="w-full bg-white/10 hover:bg-neon-yellow hover:text-black text-white py-3 rounded-xl font-outfit font-bold text-center uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group-hover/btn:gap-4"
        >
          <IconTicket size={20} />
          <span>Get Tickets</span>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
