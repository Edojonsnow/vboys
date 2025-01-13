import Image from "next/image";
import Link from "next/link";
import React from "react";

function Midpage() {
  return (
    <div className="relative h-fit mt-4">
      <div className=" w-full h-[670px] relative">
        <Image
          src="/ib-header.jpg"
          alt=""
          className=" object-fit object-top "
          fill
        />
      </div>
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black w-fit px-8 py-4 rounded-[10px] text-white">
        RSVP
      </button>
    </div>
  );
}

export default Midpage;
