import React from "react";
import Dropdown from "../Dropdown/Dropdown_Menu";

const Header = () => {
  return (
    <header className="bg-white py-4 px-10 border-b-2 border-gray-100 flex justify-between">
      <div className="flex-shrink-0">
        <a href="/" alt="logo">
          <img
            className="mr-auto h-8"
            src="./logo.png"
            alt="logo"
            loading="eager"
          />
        </a>
      </div>

      <nav className="flex-end">
        <ul className="flex items-center justify-end">
          <li className="mr-9 relative inline-block hover:text-green">
            <a className="" href="/">
              Inicio
            </a>
          </li>
          <li className="mr-9 relative hidden md:inline-block">
            <Dropdown title="Enlaces" items={["Revistas", "Sistemas"]} />
          </li>
          <li className="mr-9 relative inline-block text-green font-medium">
            <a className="" href="/">
              Buscador
            </a>
          </li>
          <li className="mr-9 relative hover:text-green hidden md:inline-block">
            <a className="" href="/">
              Quienes Somos
            </a>
          </li>
          <li className="relative hover:text-green hidden md:inline-block">
            <a className="" href="/">
              Acceder
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
