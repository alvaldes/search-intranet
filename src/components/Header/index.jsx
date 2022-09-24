import React from "react";
import { useState } from "react";
import Dropdown from "../Dropdown_Menu";

const Header = () => {
  const [open, setOpen] = useState(false);
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
        <button
          className="navbar-burger flex items-center text-gray-800 p-3 md:hidden"
          onClick={() => setOpen(true)}
        >
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <ul className="items-center justify-end hidden md:flex">
          <li className="mr-9 relative inline-block hover:text-green-light">
            <a className="" href="/">
              Inicio
            </a>
          </li>
          <li className="mr-9 relative inline-block">
            <Dropdown title="Enlaces" items={["Revistas", "Sistemas"]} />
          </li>
          <li className="mr-9 relative inline-block text-green-light font-medium">
            <a className="" href="/">
              Buscador
            </a>
          </li>
          <li className="mr-9 relative hover:text-green-light inline-block">
            <a className="" href="/">
              Quienes Somos
            </a>
          </li>
          <li className="relative hover:text-green-light inline-block">
            <a className="" href="/">
              Acceder
            </a>
          </li>
        </ul>
      </nav>
      <div className={`navbar-menu relative z-50 ${!open && "hidden"}`}>
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setOpen(false)}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              <img className="h-12" alt="logo" src="./logo.png" />
            </a>
            <button className="navbar-close" onClick={() => setOpen(false)}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:text-green-light"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li className="">
                <a
                  className="block p-4 text-sm font-semibold hover:text-green-light"
                  href="/"
                >
                  Enlaces
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="block pl-6 text-xs font-semibold hover:text-green-light"
                  href="/"
                >
                  Revistas
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block pl-6 text-xs font-semibold hover:text-green-light"
                  href="/"
                >
                  Sistemas
                </a>
              </li>
              <li className="mb-1 mt-2">
                <a
                  className="text-green-light block p-4 text-sm font-semibold hover:text-green-light"
                  href="/"
                >
                  Buscador
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:text-green-light"
                  href="/"
                >
                  Quienes Somos
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:text-green-light"
                  href="/"
                >
                  Acceder
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
