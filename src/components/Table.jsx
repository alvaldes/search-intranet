import { useContext, useState } from 'react';
import SearchContext from '../context/SearchContext';
import { Translator } from '../data/util';
import Details from './Details';
import Pagination from './Pagination';

const Table = () => {
  const searchCtx = useContext(SearchContext);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsData, setDetailsData] = useState(null);

  const [dataPerPage, setDataPerPage] = useState(6);

  const OpenDetails = (user) => {
    setDetailsData(user);
    setShowDetails(true);
  };
  const CloseDetails = () => {
    setDetailsData(null);
    setShowDetails(false);
  };

  const personType = (user) => {
    if (user.personType === 'Student') {
      return 'Estudiante';
    } else if (user.personType === 'Worker' && 'studentYear' in user) {
      return 'Trabajador & Estudiante';
    }
    return 'Trabajador';
  };

  if (searchCtx.isSearching) {
    return null;
  } else {
    const lastIndex = searchCtx.currentPage * dataPerPage;
    const firstIndex = lastIndex - dataPerPage;
    const currentData = searchCtx.searchResults.slice(firstIndex, lastIndex);
    return (
      <div>
        <table className="inline-table w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-gray-800">
            <tr className="bg-gray-800 text-white table-row">
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left hidden sm:table-cell">Correo</th>
              <th className="p-3 text-left hidden sm:table-cell">
                Tipo de Usuario
              </th>
              <th className="p-3 text-left hidden lg:table-cell">Área</th>
              <th className="p-3 text-left whitespace-nowrap"></th>
            </tr>
          </thead>
          {searchCtx.searchResults.length > 0 ? (
            <tbody className="flex-1 sm:flex-none">
              {currentData.map((i, index) => (
                <tr className="table-row mb-2 sm:mb-0" key={index}>
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    {`${i.name} ${i.surname} ${i.lastname}`}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 hidden sm:table-cell">
                    {i.email}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 hidden sm:table-cell">
                    {personType(i)}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 hidden lg:table-cell">
                    {Translator(i.area)}
                  </td>
                  <td className="border-grey-light border whitespace-nowrap p-3 cursor-pointer">
                    <button
                      type="button"
                      className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-600 font-medium rounded-3xl text-sm px-5 py-1 text-center"
                      onClick={() => OpenDetails(i)}
                    >
                      más...
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="6" className="py-4">
                  <Pagination
                    totalData={searchCtx.searchResults.length}
                    dataPerPage={dataPerPage}
                    currentPage={searchCtx.currentPage}
                    setCurrentPage={(uptPage) => {
                      searchCtx.setCurrentPage(uptPage);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="flex-1 sm:flex-none items-center">
              <tr className="text-center">
                <td colSpan="6" className="py-4">
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
