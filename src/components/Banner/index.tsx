import React from "react";
import Carousel from "../Carousel";
import { banner1, banner2, banner3 } from "../../assets";

const slides = [
  <div className="relative">
    <div className="absolute inset-0"></div>
    <img src={banner1} className="w-full h-full" />
  </div>,
  <img src={banner2} className="w-full h-full" />,
  <img src={banner3} className="w-full h-full" />,
];

const Banner: React.FC = () => {
  return (
    <div className="w-full ">
      <Carousel slides={slides} />
    </div>
  );
};

export default Banner;
