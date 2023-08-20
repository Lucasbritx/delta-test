import React from "react";

interface IMenuItem {
  title: string;
}

const MenuItem: React.FC<IMenuItem> = ({ title }) => {
  return (
    <li className="border-b-2 sm:border-none hover:scale-110 cursor-pointer">
      {title}
    </li>
  );
};

export default MenuItem;
