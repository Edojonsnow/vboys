"use client";
import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { EVENT_QUERY, IMAGE_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const Cookout = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [bannerImage, setBannerImage] = useState(null);
  const [eventInfo, setEventInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentSlug = currentItem == 0 ? "we-go-again" : "summer-cookout";

  const handleClick = () => {
    setCurrentItem((prevItem) => (prevItem === 0 ? 1 : 0));
  };

  const fetchEventInfo = async () => {
    try {
      // Fetch specific image
      const eventInfo = await client.fetch(EVENT_QUERY);
      setEventInfo(eventInfo);
    } catch (error) {
      console.error("Error fetching banner:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        // Fetch specific image
        const image = await client.fetch(IMAGE_QUERY, {
          slug: currentSlug,
        });
        setBannerImage(image);
      } catch (error) {
        console.error("Error fetching banner:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBannerImage();
    fetchEventInfo();
  }, [eventInfo]);
  if (isLoading) return <div>Loading...</div>;
  if (!bannerImage)
    return <div className="text-white">No banner image found</div>;

  return (
    <div className="relative h-fit mt-4">
      <div className=" w-full h-[390px] lg:h-[680px] relative">
        <Image
          src={urlFor(bannerImage.mainImage).url()}
          alt={bannerImage.title}
          className=" object-cover object-center"
          fill
        />
      </div>

      <div className="w-4/5  md:w-[430px] flex flex-col gap-4 items-center h-fit rounded-2xl p-8 bg-bg absolute top-20  md:top-1/4 left-1/2 transform -translate-x-1/2 lg:left-10 lg:-translate-x-0 ">
        {eventInfo && (
          <>
            <h2 className="font-helv">{eventInfo.title}</h2>
            <p className="uppercase">{eventInfo.description}</p>
            <Link href={eventInfo.eventUrl || "#"}>
              <button className="bg-white py-3 px-6 font-semibold rounded-2xl">
                {eventInfo.buttonText}
              </button>
            </Link>
          </>
        )}
      </div>
      {/* 
      <button
        className={` ${
          currentItem == 0 ? "right-5" : "left-5 rotate-180"
        } absolute top-1/2  bg-bg  rounded-full p-4`}
        onClick={handleClick}
      >
        <Image className="" src="/arrow.svg" alt="" width={15} height={15} />
      </button> */}
    </div>
  );
};

export default Cookout;
