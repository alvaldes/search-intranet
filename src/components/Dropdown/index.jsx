import React from "react";

const Dropdown = ({ label, options, value, onChange, clases }) => {
  return (
    <label className={clases}>
      {label}
      <select
        className="ml-2 p-1 border-2 border-gray-200 rounded-md"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
