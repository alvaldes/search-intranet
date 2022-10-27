import { useState } from "react";
import Details from "../Details";

const Table = ({ data, state }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [detailsData, setDetailsData] = useState(null);

  const OpenDetails = (user) => {
    setDetailsData(user);
    setShowDetails(true);
  };
  const CloseDetails = () => {
    setDetailsData(null);
    setShowDetails(false);
  };

  if (state === "" && data.length === 0) {
    return null;
  } else if (state === "loading") {
    return "loading...";
  } else {
    return (
      <div>
        <table className="inline-table w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-gray-800">
            <tr className="bg-green-400 table-row">
              <th className="p-3 text-left">CI</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left hidden sm:table-cell">Correo</th>
              <th className="p-3 text-left hidden sm:table-cell">
                Tipo de Usuario
              </th>
              <th className="p-3 text-left hidden sm:table-cell">
                Tipo de Estudiante
              </th>
              <th className="p-3 text-left hidden sm:table-cell">Grupo</th>
              <th className="p-3 text-left hidden sm:table-cell">
                Año Escolar
              </th>
              <th className="p-3 text-left hidden sm:table-cell">Dirección</th>
              <th className="p-3 text-left hidden sm:table-cell">Teléfono</th>
              <th className="p-3 text-left whitespace-nowrap"></th>
            </tr>
          </thead>
          {data.length > 0 ? (
            <tbody className="flex-1 sm:flex-none">
              {data.map((i) => (
                <tr className="table-row mb-2 sm:mb-0" key={i.cUJAEPersonDNI}>
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    {i.cUJAEPersonDNI}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    {i.name}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate hidden sm:table-cell">
                    {`${i.sAMAccountName}@tesla.cujae.edu.cu`}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate hidden sm:table-cell">
                    {i.cUJAEPersonType}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate hidden sm:table-cell">
                    {i.cUJAEStudentCourse}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate hidden sm:table-cell">
                    {i.cUJAEStudentGroup}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate hidden sm:table-cell">
                    {i.cUJAEStudentYear}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate hidden sm:table-cell">
                    {i.streetAddress}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate hidden sm:table-cell">
                    {i.telephoneNumber}
                  </td>
                  <td className="border-grey-light border whitespace-nowrap p-3 cursor-pointer">
                    <button
                      type="button"
                      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-1 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                      onClick={() => OpenDetails(i)}
                    >
                      más...
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody className="flex-1 sm:flex-none items-center">
              <tr className="text-center">
                <td colSpan="9" className="py-4">
                  No existen coincidencias
                </td>
              </tr>
            </tbody>
          )}
        </table>
        {showDetails && detailsData != null && (
          <Details user={detailsData} onClose={CloseDetails} />
        )}
      </div>
    );
  }
};

export default Table;
