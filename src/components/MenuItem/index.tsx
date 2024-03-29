import React from "react";

interface IMenuItem {
  title: string;
}

const MenuItem: React.FC<IMenuItem> = ({ title }) => {
  return (
    <li className="border-b-2 hover:border-[#0083C0] sm:border-none hover:scale-110 cursor-pointer">
      {title}
    </li>
  );
};

export default MenuItem;
