import React from "react";
import search from "../../assets/search.svg";
import Menu from "../Menu";
import { menu } from "../../assets";

const deltaLogo =
  "https://www.deltaglobal.com.br/assets/nova_home/img/deltaGlobal-deltagrupo-logo-color.svg";

const Header: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <img src={deltaLogo} alt="Logo Delta" className="h-14 w-40" />
      <Menu />
      <img
        src={search}
        alt="Pesquisar"
        className="rotate-90 hover:scale-110 cursor-pointer"
      />
      <img src={menu} alt="Menu" className="h-10 block sm:hidden" />
    </div>
  );
};

export default Header;
