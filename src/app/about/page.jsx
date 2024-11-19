import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <div className=" bg-white flex justify-around items-center py-10">
        <div className="w-[550px] ">
          <p className=" text-lg lg:px-0 text-justify  px-5 lg:text-[24px] font-semibold">
            What started in 2020 as an invite-only new year party to celebrate
            the clients and collaborators of our parent company, Ladder, Lex &
            Booker has evolved into one of the most remarkable experience
            curators out of Nigeria.
          </p>
          <br />
          <p className="text-lg px-5 lg:px-0 text-justify lg:text-[24px] font-semibold">
            We literally put everything on the line to make every experience one
            to remember for life; live or virtual, independent or in
            collaboration with a brand, there’s no party like a Vogue Boys
            party!
          </p>
          <br />
          <p className="text-lg px-5 lg:px-0 text-justify lg:text-[24px] font-semibold">
            Wanna discuss ideas, partnerships, recruitment or just what you had
            for dinner last night? Give us a shout!
          </p>
          <h1 className=" px-5 lg:px-0  text-[32px] lg:text-[48px] text-[#1E8EFC] font-semibold">
            hello@vogueboys.com
          </h1>
        </div>
        <div className="relative hidden lg:block ">
          <Image
            src="/slider-3.png"
            alt="about image"
            width={450}
            height={450}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
