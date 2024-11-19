"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    if (isSmallScreen) {
    } else {
    }
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="  ">
      <div className="relative mt-4 w-full  h-[921px] md:h-[250px]">
        <Image
          src={isSmallScreen ? "/soaker-mobile.png" : "/image-11.png"}
          alt="soaker"
          fill
          sizes="(max-width: 430px) 100vw, 50vw"
        />
      </div>
      <div className="flex lg:flex-row flex-col gap-4  py-4 mx-8 items-center justify-between">
        <div className="flex gap-4 flex-col ">
          <form
            action="https://instagram.us21.list-manage.com/subscribe/post?u=8948ce36ffa9598bbdce03c53&amp;id=c62a4d6fa6&amp;f_id=00e3ffe6f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="flex flex-col items-center"
          >
            {isSmallScreen && (
              <p className="  uppercase  text-white text-[10px] ">
                Sign up for our newsletter
              </p>
            )}
            <div className="flex ">
              <input
                className="w-72 h-12 bg-bg rounded-lg pl-4 outline-none"
                type="email"
                placeholder="Enter Email Address"
              />
              <input
                className="w-16 h-12 bg-bg rounded-lg "
                type="submit"
                value="Go"
              />
            </div>
            <div>
              {!isSmallScreen && (
                <p className=" uppercase  text-white text-[10px] ">
                  Sign up for our newsletter
                </p>
              )}
            </div>
          </form>
          <div className="flex justify-center lg:justify-start  gap-4">
            <Link className="text-bg" href="/events">
              EVENTS
            </Link>
            <Link className="text-bg" href="/">
              CONTACTS
            </Link>
            <Link className="text-bg" href="/about">
              ABOUT
            </Link>
          </div>
        </div>
        <div className="flex  items-center flex-col">
          <div className="flex gap-4">
            <Link
              href="/"
              className="bg-bg w-10 h-10 flex items-center justify-center  rounded-full "
            >
              <Image
                src="/twitter.svg"
                width={20}
                height={20}
                alt="instagram icon"
              />
            </Link>
            <Link
              href="/"
              className="bg-bg w-10 h-10 flex items-center justify-center  rounded-full "
            >
              <Image
                src="/instagram.svg"
                width={20}
                height={20}
                alt="instagram icon"
              />
            </Link>
            <Link
              href="/"
              className="bg-bg w-10 h-10 flex items-center justify-center  rounded-full "
            >
              <Image
                src="/youtube.svg"
                width={20}
                height={20}
                alt="instagram icon"
              />
            </Link>
          </div>
          <Image src="/vblogo.png" width={100} height={50} alt="vb logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
