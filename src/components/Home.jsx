import { useContext, useEffect, useState } from 'react';
import * as api_ldap from '../api/api_ldap';
import SearchContext from '../context/SearchContext';
import { Translator } from '../data/util';
import Dropdown from './Dropdown';
import Header from './Header';
import HomeSkeleton from './HomeSkeleton';
import Search from './Search';
import Table from './Table';

const Home = () => {
  const searchCtx = useContext(SearchContext);
  const [showTable, setShowTable] = useState(false);
  const [query, setQuery] = useState({
    identification: '',
    name: '',
    lastname: '',
    surname: '',
    email: '',
  });
  const [areas, setAreas] = useState(null);
  const [areaOption, setAreaOption] = useState(0);

  useEffect(() => {
    api_ldap.Get_areas((data) => {
      setAreas([
        { distinguishedName: '', name: 'Selecione un Área' },
        ...areasRefactor(data),
      ]);
    });
  }, []);

  const areasRefactor = (areas) => {
    let filterAreas = areas.filter((area) => {
      if (area.distinguishedName.startsWith('OU')) {
        area.name = Translator(area.name);
        return true;
      }
      return false;
    });
    return filterAreas;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchCtx.startSearch();
    setShowTable(true);
    let params = {
      ...query,
      area: areas[areaOption].distinguishedName,
    };
    if (
      query.identification === '' &&
      query.email === '' &&
      query.name === '' &&
      query.surname === '' &&
      query.lastname === '' &&
      areaOption === 0
    ) {
      api_ldap.Get_all_users(searchCtx);
    } else {
      api_ldap.ExcSearch(params, searchCtx);
    }
  };

  return (
    <div className="bg-gray-light h-screen">
      <Header />
      <div className="container mx-auto">
        {areas === null ? (
          <HomeSkeleton />
        ) : (
          <form className="flex flex-col mt-8" onSubmit={onSubmit}>
            <Search formData={query} onChange={(values) => setQuery(values)}>
              <Dropdown
                options={areas}
                clases="w-full mt-2 md:mt-0"
                value={areaOption}
                onChange={(event) => setAreaOption(event.target.selectedIndex)}
              />
            </Search>
            {searchCtx.isSearching ? (
              <button
                type="submit"
                className="flex flex-nowrap p-2.5 mx-8 md:ml-2 text-sm justify-center font-medium text-gray-800 bg-gray-300 rounded-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 hover:cursor-not-allowed duration-[500ms,800ms]"
                disabled
              >
                <div className="grid-1 my-auto h-5 w-5 mx-3 border-t-transparent border-solid animate-spin rounded-full border-gray-800 border-4"></div>
                <div className="grid-2 my-auto -mx-1"> Buscando...</div>
              </button>
            ) : (
              <button
                type="submit"
                className="flex flex-nowrap p-2.5 mx-8 md:ml-2 text-sm justify-center font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                Buscar
              </button>
            )}
          </form>
        )}
        {showTable && <Table />}
      </div>
    </div>
  );
};

export default Home;
