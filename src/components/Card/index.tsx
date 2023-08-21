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
    <div className="w-full rounded-lg shadow-md flex flex-col max-w-sm sm:max-w-none">
      <img
        loading="lazy"
        src={image}
        height="100%"
        width="100%"
        className="w-full rounded-t-lg object-cover"
        alt="Foto do card"
      />
      <div className="p-8 flex flex-col gap-y-4">
        <span className="text-xl font-semibold text-[#333333]">{text}</span>
        <div className="flex gap-x-4">
          <img
            loading="lazy"
            src={user}
            className="h-12 w-12"
            alt="Foto do usuário"
          />
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
