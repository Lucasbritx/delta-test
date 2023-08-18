import React from "react";
import { user } from "../../assets";

interface ICard {
  image: string;
  text: string;
  authorName: string;
  postDate: string;
}

const Card: React.FC<ICard> = ({ image, text, authorName, postDate }) => {
  return (
    <div className="w-full rounded-lg shadow-md flex flex-col max-w-sm">
      <img src={image} className="w-full h-2/3 rounded-t-lg" />
      <div className="p-8 flex flex-col gap-y-4">
        <span className="text-xl font-semibold text-[#333333]">{text}</span>
        <div className="flex gap-x-4">
          <img src={user} className="h-12 w-12" />
          <div className="flex flex-col text-[#6D6D6D]">
            <span className="text-base">{authorName}</span>
            <span className="text-xs">{postDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
