import React from "react";

const Table = ({ data }) => {
  return (
    <table className="inline-table w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead className="text-gray-800">
        <tr className="bg-green-400 table-row">
          <th className="p-3 text-left">CI</th>
          <th className="p-3 text-left">Nombre</th>
          <th className="p-3 text-left hidden sm:table-cell">Correo</th>
          <th className="p-3 text-left whitespace-nowrap"></th>
        </tr>
      </thead>
      {data.length > 0 ? (
        <tbody className="flex-1 sm:flex-none">
          {data.map((i) => (
            <tr className="table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                {i.ci}
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                {i.nombre}
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate hidden sm:table-cell">
                {i.correo}
              </td>
              <td className="border-grey-light border whitespace-nowrap hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                ver más
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody className="flex-1 sm:flex-none items-center">
          <tr className="text-center">
            <td colspan="3" className="py-4">
              . . .
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default Table;
