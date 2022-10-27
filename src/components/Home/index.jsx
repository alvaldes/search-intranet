import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Areas } from "../../data/static";
import Header from "../../components/Header";
import Search from "../../components/Search";
import RadioBtn from "../../components/Radio";
import Dropdown from "../../components/Dropdown";
import Table from "../../components/Table";
import * as api_ldap from "../../api/api_ldap";

function Home() {
  const [cookies] = useCookies(["accessToken", "refreshToken"]);
  const [searchState, setSearchState] = useState("");
  const [selectedOption, setSelectedOption] = useState("ci");
  const [areaOption, setAreaOption] = useState("");
  const [dataTable, setDataTable] = useState([]);
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

  const onSubmit = async (event) => {
    event.preventDefault();
    setSearchState("loading");
    let result = {};
    let params = {
      query: searchQuery,
      area: areaOption,
      access: cookies.accessToken,
      refresh: cookies.refreshToken,
    };
    if (searchQuery === "") {
      result =
        areaOption === ""
          ? await api_ldap.Get_all_users(params)
          : await api_ldap.Get_user_by_area(params);
    } else if (areaOption !== "") {
      switch (selectedOption) {
        case "ci":
          result = await api_ldap.Get_user_by_area_ci(params);
          break;
        case "name":
          result = await api_ldap.Get_user_by_area_name(params);
          break;
        case "user":
          result = await api_ldap.Get_user_by_area_username(params);
          break;
        default:
          break;
      }
    } else {
      console.log("only text");
    }
    if (!result.error) {
      console.log(result);
      const data = result.data;
      setDataTable(data);
      setSearchState("success");
      return;
    } else {
      console.error(result.error);
      setDataTable([]);
      setSearchState("error");
    }
  };

  return (
    <div className="bg-gray-light h-screen">
      <Header />
      <div className="container mx-auto">
        <form className="flex flex-col mt-8" onSubmit={onSubmit}>
          <Search onChange={(value) => setSearchQuery(value)}>
            <Dropdown
              // label="Seleccione el Área:"
              options={Areas}
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
                value="Usuario"
                id="user"
                checked={selectedOption}
                onClick={() => setSelectedOption("user")}
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
        </form>
        <Table data={dataTable} state={searchState} />
      </div>
    </div>
  );
}

export default Home;
