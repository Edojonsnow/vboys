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
      <div className="fixed z-20 left-0 right-0 mx-2 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/vblogo.png" alt="logo" width={75} height={75} />
          </Link>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" group cursor-pointer flex flex-col gap-1  justify-center items-center w-16 h-16 rounded-full bg-bg"
        >
          <div
            className={` w-7 h-1 bg-black rounded-sm relative ${
              isOpen
                ? "transition rotate-45 translate-y-2"
                : "transition rotate-0 translate-y-0"
            }  `}
          ></div>
          <div
            className={` w-4 h-1 bg-black rounded-sm relative left-1  ${
              isOpen ? "scale-x-0 transition" : "scale-x-1 transition"
            } `}
          ></div>
          <div
            className={` w-7 h-1 bg-black rounded-sm relative ${
              isOpen
                ? "transition -rotate-45 -translate-y-2"
                : "transition rotate-0 translate-y-0"
            }  `}
          ></div>{" "}
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="h-screen w-screen fixed   bg-black opacity-40  z-10"></div>
          <div
            data-aos="slide-up"
            className=" fixed top-20  left-5 lg:top-10 lg:left-10 flex flex-col gap-1 z-10"
          >
            <Link
              href="/events"
              className="text-bg font-helv text-[50px] lg:text-[100px] font-semibold"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-bg font-helv text-[50px] lg:text-[100px] font-semibold"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-bg font-helv text-[50px] lg:text-[100px] font-semibold"
            >
              Virtual
            </Link>
            <Link
              href="/"
              className="text-bg font-helv text-[50px] lg:text-[100px] font-semibold"
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
