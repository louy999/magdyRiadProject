import React from "react";
import Image from "next/image";
import image2 from "../../image/2.jpeg";

const OurPartaner = () => {
  return (
    <div className="carousel carousel-center rounded-box h-96">
      <div className="carousel-item">
        <Image
          src={image2}
          alt="1"
          className="w-full object-contain bg-black/70"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={image2}
          alt="1"
          className="w-full object-contain bg-black/70"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={image2}
          alt="1"
          className="w-full object-contain bg-black/70"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={image2}
          alt="1"
          className="w-full object-contain bg-black/70"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={image2}
          alt="1"
          className="w-full object-contain bg-black/70"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={image2}
          alt="1"
          className="w-full object-contain bg-black/70"
        />
      </div>
      <div className="carousel-item">
        <Image
          src={image2}
          alt="1"
          className="w-full object-contain bg-black/70"
        />
      </div>
    </div>
  );
};

export default OurPartaner;
