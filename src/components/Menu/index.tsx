import React from "react";
import MenuItem from "../MenuItem";

const menuItems = [
  "Primeiro Menu",
  "Segundo Menu",
  "Terceiro Menu",
  "Quarto Menu",
];

const Menu: React.FC = () => {
  return (
    <ul className="hidden sm:flex w-full gap-x-16 ml-16 text-[#333333] font-medium text-sm">
      {menuItems.map((item) => (
        <MenuItem key={item} title={item} />
      ))}
    </ul>
  );
};

export default Menu;
