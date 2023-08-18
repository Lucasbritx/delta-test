import React from "react";

interface IMenuItem {
  name: string;
}

const MenuItem: React.FC<IMenuItem> = ({ name }) => {
  return <li className="hover:text-sky-950 cursor-pointer">{name}</li>;
};

export default MenuItem;
