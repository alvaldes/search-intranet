import React from 'react';
import { BiBuildings } from 'react-icons/bi';

const Dropdown = ({ label, options, value, onChange, clases, isrequired }) => {
  return (
    <div className="relative w-full">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <BiBuildings className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>
      <label className={`${clases} flex flex-col`}>
        <span className="">{label}</span>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          value={options.value}
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
    </div>
  );
};

export default Dropdown;
