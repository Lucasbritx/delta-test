import React from "react";
import search from "../../assets/search.svg";
import Menu from "../Menu";
import { menu } from "../../assets";

const deltaLogo =
  "https://www.deltaglobal.com.br/assets/nova_home/img/deltaGlobal-deltagrupo-logo-color.svg";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="flex w-full items-center justify-between p-4">
      <img src={deltaLogo} alt="Logo Delta" className="h-14 w-40" />
      <Menu show={showMenu} setShow={setShowMenu} />
      <img
        src={search}
        alt="Pesquisar"
        className="rotate-90 hover:scale-110 cursor-pointer"
      />
      <button onClick={() => setShowMenu(!showMenu)}>
        <img src={menu} alt="Menu" className="h-10 block sm:hidden" />
      </button>
    </div>
  );
};

export default Header;
