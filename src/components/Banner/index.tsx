import React from "react";
import Carousel from "../Carousel";
import { banner1, banner2, banner3, deltaWhiteLogo } from "../../assets";

const getSlide = (image: string, bgColor: string) => {
  return (
    <div className="relative">
      <div className="hidden absolute inset-0 sm:flex justify-around items-center text-white z-10">
        <div className="flex flex-col">
          <span className="text-4xl opacity-75">Teste da</span>
          <span className="text-8xl font-extrabold">Delta</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl opacity-75">Qual</span>
          <span className="font-bold text-6xl ml-8"> teste </span>
          <span className="text-4xl opacity-75">você quer fazer </span>
          <span className="font-bold text-6xl ml-24">hoje?</span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-black opacity-70">
        <div
          className={`absolute rounded-xl inset-0 opacity-50`}
          style={{ backgroundColor: bgColor }}
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
