import React, { useState } from 'react';
import Dropdown from './Dropdown_Menu';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white py-4 px-10 border-b-2 border-gray-100 flex justify-between">
      <div className="flex-shrink-0">
        <a href="http://intranet3.cujae.edu.cu/" alt="logo">
          <img
            className="mr-auto h-8"
            src="./logo512.png"
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
            <a className="" href="http://intranet3.cujae.edu.cu/">
              Inicio
            </a>
          </li>
          <li className="mr-9 relative inline-block">
            <Dropdown title="Enlaces">
              <li
                className="rounded-sm whitespace-nowrap cursor-pointer px-3 py-1 hover:bg-gray-100 hover:text-green-light"
                key="edt"
              >
                <a
                  className=""
                  href="http://intranet3.cujae.edu.cu/index.php/enlaces/servicios"
                >
                  Entorno de Trabajo
                </a>
              </li>

              <li
                className="rounded-sm whitespace-nowrap cursor-pointer px-3 py-1 hover:bg-gray-100 hover:text-green-light"
                key="revista"
              >
                <a
                  className=""
                  href="http://intranet3.cujae.edu.cu/index.php/enlaces/revistas"
                >
                  Revistas
                </a>
              </li>
              <li
                className="rounded-sm whitespace-nowrap cursor-pointer px-3 py-1 hover:bg-gray-100 hover:text-green-light"
                key="sitiowww"
              >
                <a
                  className=""
                  href="http://intranet3.cujae.edu.cu/index.php/enlaces/sitios-web"
                >
                  Sitios Web
                </a>
              </li>
            </Dropdown>
          </li>
          <li className="mr-9 relative inline-block text-green-light font-medium">
            <a className="" href="/">
              Buscador
            </a>
          </li>
          <li className="mr-9 relative hover:text-green-light inline-block">
            <a
              className=""
              href="http://intranet3.cujae.edu.cu/index.php/quienes-somos"
            >
              Quienes Somos
            </a>
          </li>
        </ul>
      </nav>
      <div className={`navbar-menu relative z-50 ${!open && 'hidden'}`}>
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setOpen(false)}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-3xl font-bold leading-none"
              href="http://intranet3.cujae.edu.cu/"
            >
              <img className="h-12" alt="logo" src="./logo512.png" />
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  href="http://intranet3.cujae.edu.cu/"
                >
                  Inicio
                </a>
              </li>
              <li className="">
                <span className="block p-4 text-sm font-semibold hover:text-green-light">
                  Enlaces
                </span>
              </li>
              <li className="mb-3">
                <a
                  className="block pl-6 text-xs font-semibold hover:text-green-light"
                  href="http://intranet3.cujae.edu.cu/index.php/enlaces/servicios"
                >
                  Entorno de Trabajo
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="block pl-6 text-xs font-semibold hover:text-green-light"
                  href="http://intranet3.cujae.edu.cu/index.php/enlaces/revistas"
                >
                  Revistas
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block pl-6 text-xs font-semibold hover:text-green-light"
                  href="http://intranet3.cujae.edu.cu/index.php/enlaces/sitios-web"
                >
                  Sitios Webs
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
                  href="http://intranet3.cujae.edu.cu/index.php/quienes-somos"
                >
                  Quienes Somos
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
