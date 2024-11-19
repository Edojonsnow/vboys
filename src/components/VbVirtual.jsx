import Image from "next/image";
import React from "react";

const VbVirtual = () => {
  return (
    <div className="relative mt-4 w-full h-[450px]">
      <Image src="/footer-pic.png" alt="VB VIRTUAL" fill />
      <button className="absolute bg-bg font-helv px-7 py-3 rounded-xl bottom-10 right-[17%]">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default VbVirtual;
