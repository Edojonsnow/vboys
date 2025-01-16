"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={` md:-left-5 -left-3 absolute top-1/3  rotate-180 bg-bg rounded-full flex justify-center items-center w-12 h-12 `}
      type="button"
      {...restProps}
    >
      <Image className="" src="/arrow.svg" alt="" width={12} height={21} />
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={` md:-right-5 -right-3 absolute top-1/3  bg-bg  rounded-full flex justify-center items-center w-12 h-12 `}
      type="button"
      {...restProps}
    >
      <Image className="" src="/arrow.svg" alt="" width={12} height={21} />
    </button>
  );
};
