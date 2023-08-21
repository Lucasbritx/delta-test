import React from "react";
import MenuItem from "../MenuItem";

const menuItems = [
  "Primeiro Menu",
  "Segundo Menu",
  "Terceiro Menu",
  "Quarto Menu",
];

interface IMenu {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<IMenu> = ({ show, setShow }) => {
  return (
    <>
      {show && (
        <div className="flex justify-center items-center sm:hidden bg-white z-50 fixed h-screen inset-0">
          <button onClick={() => setShow(!show)}>
            <img
              loading="lazy"
              src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png"
              alt="Fechar"
              className="absolute top-4 right-4"
            />
          </button>
          <ul className="flex flex-col gap-y-4 items-center">
            {menuItems.map((item) => (
              <MenuItem key={item} title={item} />
            ))}
          </ul>
        </div>
      )}
      <ul className="hidden sm:flex w-full gap-x-16 ml-16 text-[#333333] font-medium text-sm">
        {menuItems.map((item) => (
          <MenuItem key={item} title={item} />
        ))}
      </ul>
    </>
  );
};

export default Menu;
