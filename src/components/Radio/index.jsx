import React from "react";

const Radio = ({ value, id, checked, onClick }) => {
  return (
    <div className="flex items-center w-24 p-1">
      <input
        id={id}
        type="radio"
        name={value}
        value={value}
        className=" border-gray-300 focus:ring-2 focus:ring-blue-300"
        aria-labelledby={id}
        aria-describedby={id}
        checked={checked === id}
        onChange={onClick}
      />
      <label
        htmlFor={id}
        className="text-sm whitespace-nowrap font-medium text-gray-900 ml-2 block select-none"
      >
        {value}
      </label>
    </div>
  );
};

export default Radio;
