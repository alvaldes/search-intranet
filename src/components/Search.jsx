import { useEffect, useRef } from 'react';
import { AiOutlineMail, AiOutlineNumber } from 'react-icons/ai';
import { IoText } from 'react-icons/io5';
import { VscWholeWord } from 'react-icons/vsc';

const Search = ({ formData, onChange, children }) => {
  const inputCI = useRef(null);

  useEffect(() => {
    inputCI.current.focus();
  }, []);

  return (
    <div className="grid items-center mb-4 px-3 md:px-0 grid-cols-1 md:grid-cols-2 gap-2">
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiOutlineNumber className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="number"
          id="search-ci"
          ref={inputCI}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Carné de Idendidad"
          onChange={(e) => {
            formData.identification = e.target.value;
            onChange(formData);
          }}
        />
      </div>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiOutlineMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="email"
          id="search-email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Correo CUJAE"
          onChange={(e) => {
            formData.email = e.target.value;
            onChange(formData);
          }}
        />
      </div>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <IoText className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="search-name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Nombre"
          onChange={(e) => {
            formData.name = e.target.value;
            onChange(formData);
          }}
        />
      </div>
      {children}
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <VscWholeWord className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="search-surname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Primer Apellido"
          onChange={(e) => {
            formData.surname = e.target.value;
            onChange(formData);
          }}
        />
      </div>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <VscWholeWord className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="search-lastname"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Segundo Apellido"
          onChange={(e) => {
            formData.lastname = e.target.value;
            onChange(formData);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
