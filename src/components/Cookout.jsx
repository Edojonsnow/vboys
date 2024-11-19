"use client";
import Image from "next/image";
import React, { useState } from "react";

const Cookout = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleClick = () => {
    setCurrentItem((prevItem) => (prevItem === 0 ? 1 : 0));
  };

  const items = [
    {
      title: " DIRTY, SEXY RAVE RETURNS 30TH AUGUST! ",
      description: " Limited free tickets for the sexiest ravers only. RSVP ",
      button: "RSVP",
      link: "https://tix.africa/vbdsr",
    },
    {
      title: " SUMMER COOKOUT GOES ON A 5-CITY TOUR!",
      description:
        "The wettest, sweatiest water park festival in Nigeria is coming to IBADAN, ENUGU, PORT-HARCOURT & ABUJA in Q2!",

      button: "SIGN UP  ",
      link: "",
    },
  ];
  return (
    <div className="relative h-fit mt-4">
      <div className=" w-full h-[500px] relative">
        <Image
          className="object-cover object-top"
          src={currentItem == 0 ? "/ib-header.jpg" : "/DUN_8034.jpg"}
          alt="hero-image"
          fill
        />
      </div>

      <div className=" w-4/5 lg:w-[432px] flex flex-col gap-4 items-start h-fit rounded-2xl p-8  bg-bg absolute top-1/4 left-10">
        <h2 className="font-helv">{items[currentItem].title}</h2>
        <p>{items[currentItem].description}</p>
        <button className="bg-white p-3 rounded-2xl">
          {items[currentItem].button}
        </button>
      </div>

      <button
        className={` ${
          currentItem == 0 ? "right-5" : "left-5 rotate-180"
        } absolute top-1/2  bg-zinc-900 opacity-55 rounded-full p-4`}
        onClick={handleClick}
      >
        <Image className="" src="/arrow.svg" alt="" width={15} height={15} />
      </button>
    </div>
  );
};

export default Cookout;