import React from "react";
import Carousel from "../Carousel";
import { banner1, banner2, banner3, deltaWhiteLogo } from "../../assets";

const getSlide = (image: string, bgColor: string) => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div
          className={`absolute rounded-xl inset-0 bg-[${bgColor}] opacity-95`}
        >
          <img
            src={deltaWhiteLogo}
            className="absolute right-0 opacity-10 h-full"
          />
        </div>
      </div>
      <img src={image} className="w-full h-full" />
    </div>
  );
};

const slides = [
  getSlide(banner1, "#0272AAC2"),
  getSlide(banner2, "#EDEFBEC2"),
  getSlide(banner3, "#AA0202C2"),
];

const Banner: React.FC = () => {
  return (
    <div className="w-full">
      <Carousel slides={slides} />
    </div>
  );
};

export default Banner;
