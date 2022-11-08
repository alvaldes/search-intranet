import React from "react";

const Dropdown = ({ label, options, value, onChange, clases, isrequired }) => {
  return (
    <label className={`${clases} flex flex-col`}>
      <span className="">{label}</span>
      <select
        className="p-2 border-2 border-gray-200 rounded-md"
        value={value}
        onChange={onChange}
        required={isrequired}
      >
        {options.map((option) => (
          <option value={option.name} key={option.name} className="w-50">
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
