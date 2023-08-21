import React from "react";
import { user } from "../../assets";
import ContentLoader from "react-content-loader";

interface ICard {
  image: string;
  text: string;
  authorName: string;
  postDate: string;
}

const renderImgSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 100% 100%"
      height={"100%"}
      width={"100%"}
      className="w-full rounded-t-lg"
      speed={1}
    >
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
    </ContentLoader>
  );
};

const Card: React.FC<ICard> = ({ image, text, authorName, postDate }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  return (
    <div className="w-full rounded-lg shadow-md flex flex-col max-w-sm sm:max-w-none">
      {!isImageLoaded && renderImgSkeleton()}
      <img
        loading="lazy"
        src={image}
        onLoad={() => setIsImageLoaded(true)}
        className={"w-full rounded-t-lg object-cover"}
        style={{ height: isImageLoaded ? "100%" : "0" }}
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
