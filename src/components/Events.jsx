import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  const dummyEvents = [
    {
      id: 1,
      title: "SUMMER COOKOUT VOL. 4",
      date: "JULY 15",
      location: "BROOKLYN, NY",
      image: "/soakers.png", // Placeholder - check if file exists or correct
    },
    {
      id: 2,
      title: "VIRTUAL NIGHTS",
      date: "AUG 04",
      location: "MANHATTAN, NY",
      image: "/newHero.jpg",
    },
    {
      id: 3,
      title: "HALLOWEEN BASH",
      date: "OCT 31",
      location: "QUEENS, NY",
      image: "/soakers.png",
    },
  ];

  return (
    <div className="py-24 px-6 md:px-12 bg-black w-full" id="events">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-neon-yellow font-bold tracking-widest text-sm mb-2">WHATS NEXT</h2>
            <h1 className="text-white font-outfit font-extrabold text-5xl md:text-7xl">UPCOMING<br/>EVENTS</h1>
          </div>
          <button className="hidden md:block text-white border border-white/50 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">
            VIEW ALL
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyEvents.map((event) => (
            <EventCard
              key={event.id}
              eventTitle={event.title}
              date={event.date}
              location={event.location}
              imageSrc={event.image}
              ticketLink="/events"
            />
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
             <button className="text-white border border-white/50 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
