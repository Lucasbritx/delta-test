import React from "react";

interface IMenuItem {
  title: string;
}

const MenuItem: React.FC<IMenuItem> = ({ title }) => {
  return <li className="hover:scale-110 cursor-pointer">{title}</li>;
};

export default MenuItem;
