import React from "react";

import search from "../../assets/search.svg";
import MenuItem from "../MenuItem";

const Header: React.FC = () => {
  return (
    <div className="flex w-full items-center p-4">
      <img
        src="https://www.deltaglobal.com.br/assets/nova_home/img/deltaGlobal-deltagrupo-logo-color.svg"
        alt="Logo Delta"
        className="h-14 w-40"
      />
      <ul className="flex w-full gap-x-16 ml-16 text-[#333333] font-medium text-sm">
        <MenuItem name="Primeiro Menu" />
        <MenuItem name="Segundo Menu" />
        <MenuItem name="Terceiro Menu" />
        <MenuItem name="Quarto Menu" />
      </ul>
      <img src={search} alt="Pesquisar" className="rotate-90" />
    </div>
  );
};

export default Header;
