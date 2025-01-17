"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MailchimpForm from "./MailChimpForm";

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="  ">
      <div className="relative  w-full h-[70px] md:h-[140px] lg:h-[206px]">
        <Image
          src={isSmallScreen ? "/mobile-soaker.png" : "/soakers.png"}
          alt="soaker"
          fill
        />
      </div>
      <Image
        src="/vblogo.png"
        className=" mx-auto lg:hidden"
        width={70}
        height={50}
        alt="vb logo"
      />
      <div className="flex lg:flex-row flex-col gap-4  py-4 lg:mx-32 items-center justify-between">
        <div className="flex gap-3 flex-col ">
          <MailchimpForm />
          <Image
            src="/vblogo.png"
            className="hidden lg:block"
            width={76}
            height={100}
            alt="vb logo"
          />
          <div className="flex justify-center lg:hidden lg:justify-start  gap-4">
            <Link className="text-[#FAF1CB] text-sm" href="/events">
              EVENTS
            </Link>
            <Link className="text-[#FAF1CB] text-sm" href="/">
              CONTACTS
            </Link>
            <Link className="text-[#FAF1CB] text-sm" href="/about">
              ABOUT
            </Link>
          </div>
          {/* <form
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
          </form> */}
        </div>
        <div className="flex mt-10 md:mt-0  items-center  flex-col gap-20 justify-between">
          <div className="flex gap-4">
            <Link
              href="/"
              className=" w-10 h-10 flex items-center justify-center   "
            >
              <Image
                src="/twitter.svg"
                width={32}
                height={32}
                alt="instagram icon"
              />
            </Link>
            <Link
              href="/"
              className=" w-10 h-10 flex items-center justify-center   "
            >
              <Image
                src="/instagram.svg"
                width={32}
                height={32}
                alt="instagram icon"
              />
            </Link>
            <Link
              href="/"
              className=" w-10 h-10 flex items-center justify-center "
            >
              <Image
                src="/youtube.svg"
                width={32}
                height={32}
                alt="instagram icon"
              />
            </Link>
          </div>
          <div className="hidden justify-center lg:flex lg:justify-start  gap-10">
            <Link className="text-[#FAF1CB]" href="/events">
              EVENTS
            </Link>
            <Link className="text-[#FAF1CB]" href="/">
              CONTACTS
            </Link>
            <Link className="text-[#FAF1CB]" href="/about">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
