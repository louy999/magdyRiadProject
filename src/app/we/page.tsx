import React from "react";
import Image from "next/image";
import titls from "../image/title_image.jpg";
const WeAre = () => {
  return (
    <div>
      <div className="">
        <Image
          src={titls}
          alt="l"
          className="absolute top-0 left-0 w-screen h-[50vh] -z-10"
        />
        <div className="z-20 w-screen h-[50vh] text-white text-5xl font-bold flex justify-center items-center">
          عن شركة ماجيك للمقولات
        </div>
      </div>
    </div>
  );
};

export default WeAre;
