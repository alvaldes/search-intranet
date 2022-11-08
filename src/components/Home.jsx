import { useState, useEffect, useContext } from "react";
import SearchContext from "../context/SearchContext";
import HomeSkeleton from "./HomeSkeleton";
import Header from "./Header";
import Search from "./Search";
import RadioBtn from "./RadioBtn";
import Dropdown from "./Dropdown";
import Table from "./Table";
import * as api_ldap from "../api/api_ldap";

const Home = () => {
  const searchCtx = useContext(SearchContext);
  const [showTable, setShowTable] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ci");
  const [areas, setAreas] = useState(null);
  const [areaOption, setAreaOption] = useState("Selecione un Área");
  const [searchQuery, setSearchQuery] = useState("");
  // const [provinciaOption, setProvinciaOption] = useState(0);
  // const [municipioOption, setMunicipioOption] = useState(0);
  // const [userTypeOption, setUserTypeOption] = useState("all");
  // const [municipios, setMunicipios] = useState([]);
  // const [provincias, setProvincias] = useState([]);

  // useEffect(() => {
  // if (provincias.length === 0) {
  //   let aux = Region.map((p) => {
  //     return { label: p.nombre, value: p.id };
  //   });
  //   aux.unshift({ label: "Todos", value: 0 });
  //   setProvincias(aux);
  // }
  // }, []);

  // useEffect(() => {
  //   let aux = [];
  //   if (provinciaOption > 0) {
  //     aux = Region[provinciaOption - 1].municipios.map((i) => {
  //       return { label: i, value: i };
  //     });
  //   }
  //   aux.unshift({ label: "Todos", value: 0 });
  //   setMunicipios(aux);
  // }, [provinciaOption]);

  useEffect(() => {
    api_ldap.Get_areas((data) => {
      setAreas([{ name: "Selecione un Área" }, ...data]);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    searchCtx.startSearch();
    setShowTable(true);
    let params = {
      query: searchQuery,
      area: areaOption,
    };
    if (searchQuery === "") {
      areaOption === ""
        ? api_ldap.Get_all_users(params, searchCtx)
        : api_ldap.Get_users_by_area(params, searchCtx);
    } else {
      switch (selectedOption) {
        case "ci":
          api_ldap.Get_user_by_ci(params, searchCtx);
          break;
        case "name":
          api_ldap.Get_user_by_name(params, searchCtx);
          break;
        case "email":
          api_ldap.Get_user_by_email(params, searchCtx);
          break;
        default:
          break;
      }
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
            <Search onChange={(value) => setSearchQuery(value)}>
              <Dropdown
                // label="Seleccione el Área:"
                options={areas}
                clases="w-full mt-2 md:mt-0"
                value={areaOption}
                onChange={(event) => setAreaOption(event.target.value)}
              />
            </Search>
            <div className="">
              <div className="grid grid-cols-3 mb-5 justify-items-center">
                <RadioBtn
                  value="CI"
                  id="ci"
                  checked={selectedOption}
                  onClick={() => setSelectedOption("ci")}
                />
                <RadioBtn
                  value="Nombre"
                  id="name"
                  checked={selectedOption}
                  onClick={() => setSelectedOption("name")}
                />
                <RadioBtn
                  value="Correo"
                  id="email"
                  checked={selectedOption}
                  onClick={() => setSelectedOption("email")}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
                {/* <Dropdown
                  label="Seleccione la Provincia:"
                  options={provincias}
                  value={provinciaOption}
                  onChange={(event) => setProvinciaOption(event.target.value)}
                  clases="mb-2 md:mb-0"
                />
                <Dropdown
                  label="Seleccione el Municipio:"
                  options={municipios}
                  value={municipios[municipioOption]}
                  onChange={(event) => setMunicipioOption(event.target.value)}
                  clases="mb-2 md:mb-0"
                /> */}
                {/* <Dropdown
                  label="Tipo de Usuario:"
                  options={User_Type}
                  value={userTypeOption}
                  onChange={(event) => setUserTypeOption(event.target.value)}
                  clases="mb-2 md:mb-0"
                /> */}
              </div>
            </div>
            {searchCtx.isSearching ? (
              <button
                type="submit"
                class="flex flex-nowrap p-2.5 mx-8 md:ml-2 text-sm justify-center font-medium text-white bg-green-400 rounded-lg border border-green-400 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-300 hover:cursor-not-allowed duration-[500ms,800ms]"
                disabled
              >
                <div class="grid-1 my-auto h-5 w-5 mx-3 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                <div class="grid-2 my-auto -mx-1"> Buscando...</div>
              </button>
            ) : (
              <button
                type="submit"
                className="flex flex-nowrap p-2.5 mx-8 md:ml-2 text-sm justify-center font-medium text-white bg-green-600 rounded-lg border border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
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
