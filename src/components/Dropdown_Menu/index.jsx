import React from 'react';
import './style.module.css';

const Dropdown_Menu = ({ title, children }) => {
  return (
    <div className="group inline-block">
      <button className="flex items-center min-w-32">
        <span className="whitespace-nowrap flex-1 hover:text-green-light">
          {title}
        </span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        className="bg-white border rounded-md transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 z-40"
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown_Menu;
