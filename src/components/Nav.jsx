"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <div>
      <div className="navBg z-20 left-0 right-0 h-20  lg:h-28   px-10 md:px-32 flex justify-between items-center">
        <Link href="/">
          <div className="relative w-12 h-20 md:w-16 md:h-24">
            <Image src="/vblogo.png" alt="logo" fill />
          </div>
        </Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" group cursor-pointer flex flex-col gap-4  justify-center items-center w-16 h-16 "
        >
          <div
            className={` w-10  md:w-16 h-[1.5px] bg-white rounded-sm relative  `}
          ></div>
          <div
            className={` w-10  md:w-16 h-[1.5px] bg-white rounded-sm relative   `}
          ></div>
          <div
            className={` w-10  md:w-16 h-[1.5px] bg-white rounded-sm relative  `}
          ></div>{" "}
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="h-screen w-screen fixed   bg-black opacity-40  z-10"></div>
          <div
            data-aos="slide-up"
            className=" fixed top-1/2 -translate-y-1/2 p-10 bg-black rounded-2xl items-center left-1/2 -translate-x-1/2  flex flex-col gap-1 z-10"
          >
            <Link
              href="/events"
              className="text-bg font-helv text-[40px] lg:text-[100px] font-semibold"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-bg font-helv text-[40px] lg:text-[100px] font-semibold"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-bg font-helv text-[40px] lg:text-[100px] font-semibold"
            >
              Virtual
            </Link>
            <Link
              href="/"
              className="text-bg font-helv text-[40px] lg:text-[100px] font-semibold"
            >
              Info
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
