import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import RadioBtn from "./components/Radio/Radio";

function App() {
  const [selectedOption, setSelectedOption] = useState("nombre");
  const [provinciaOption, setProvinciaOption] = useState(-1);
  const [municipioOption, setMunicipioOption] = useState(-1);
  const [areaOption, setAreaOption] = useState(0);
  const [provincias, setProvincias] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  const Region = [
    {
      id: "1",
      nombre: "Pinar del Río",
      municipios: [
        "Consolación del Sur",
        "Guane",
        "La Palma",
        "Los Palacios",
        "Mantua",
        "Minas de Matahambre",
        "Pinar del Río",
        "San Juan y Martínez",
        "San Luis",
        "Sandino",
        "Viñales",
      ],
    },
    {
      id: "2",
      nombre: "Artemisa",
      municipios: [
        "Alquízar",
        "Artemisa",
        "Bauta",
        "Caimito",
        "Guanajay",
        "Güira de Melena",
        "Mariel",
        "San Antonio de los Baños",
        "Bahía Honda",
        "San Cristóbal",
        "Candelaria",
      ],
    },
    {
      id: "3",
      nombre: "Mayabeque",
      municipios: [
        "Batabanó",
        "Bejucal",
        "Güines",
        "Jaruco",
        "Madruga",
        "Melena del Sur",
        "Nueva Paz",
        "Quivicán",
        "San José de las Lajas",
        "San Nicolás de Bari",
        "Santa Cruz del Norte",
      ],
    },
    {
      id: "4",
      nombre: "La Habana",
      municipios: [
        "Arroyo Naranjo",
        "Boyeros",
        "Centro Habana",
        "Cerro",
        "Cotorro",
        "Diez de Octubre",
        "Guanabacoa",
        "Habana del Este",
        "Habana Vieja",
        "La Lisa",
        "Marianao",
        "Playa",
        "Plaza",
        "Regla",
        "San Miguel del Padrón",
      ],
    },
    {
      id: "5",
      nombre: "Matanzas",
      municipios: [
        "Calimete",
        "Cárdenas",
        "Ciénaga de Zapata",
        "Colón",
        "Jagüey Grande",
        "Jovellanos",
        "Limonar",
        "Los Arabos",
        "Martí",
        "Matanzas",
        "Pedro Betancourt",
        "Perico",
        "Unión de Reyes",
      ],
    },
    {
      id: "6",
      nombre: "Cienfuegos",
      municipios: [
        "Abreus",
        "Aguada de Pasajeros",
        "Cienfuegos",
        "Cruces",
        "Cumanayagua",
        "Palmira",
        "Rodas",
        "Santa Isabel de las Lajas",
      ],
    },
    {
      id: "7",
      nombre: "Villa Clara",
      municipios: [
        "Caibarién",
        "Camajuaní",
        "Cifuentes",
        "Corralillo",
        "Encrucijada",
        "Manicaragua",
        "Placetas",
        "Quemado de Güines",
        "Ranchuelo",
        "Remedios",
        "Sagua la Grande",
        "Santa Clara",
        "Santo Domingo",
      ],
    },
    {
      id: "8",
      nombre: "Sancti Spíritus",
      municipios: [
        "Cabaigúan",
        "Fomento",
        "Jatibonico",
        "La Sierpe",
        "Sancti Spíritus",
        "Taguasco",
        "Trinidad",
        "Yaguajay",
      ],
    },
    {
      id: "9",
      nombre: "Ciego de Ávila",
      municipios: [
        "Ciro Redondo",
        "Baraguá",
        "Bolivia",
        "Chambas",
        "Ciego de Ávila",
        "Florencia",
        "Majagua",
        "Morón",
        "Primero de Enero",
        "Venezuela",
      ],
    },
    {
      id: "10",
      nombre: "Camagüey",
      municipios: [
        "Camagüey",
        "Carlos Manuel de Céspedes",
        "Esmeralda",
        "Florida",
        "Guaimaro",
        "Jimagüayú",
        "Minas",
        "Najasa",
        "Nuevitas",
        "Santa Cruz del Sur",
        "Sibanicú",
        "Sierra de Cubitas",
        "Vertientes",
      ],
    },
    {
      id: "11",
      nombre: "Las Tunas",
      municipios: [
        "Amancio Rodríguez",
        "Colombia",
        "Jesús Menéndez",
        "Jobabo",
        "Las Tunas",
        "Majibacoa",
        "Manatí",
        "Puerto Padre",
      ],
    },
    {
      id: "12",
      nombre: "Holguín",
      municipios: [
        "Antilla",
        "Báguanos",
        "Banes",
        "Cacocum",
        "Calixto García",
        "Cueto",
        "Frank País",
        "Gibara",
        "Holguín",
        "Mayarí",
        "Moa",
        "Rafael Freyre",
        "Sagua de Tánamo",
        "Urbano Noris",
      ],
    },
    {
      id: "13",
      nombre: "Santiago de Cuba",
      municipios: [
        "Contramaestre",
        "Guamá",
        "Julio Antonio Mella",
        "Palma Soriano",
        "San Luis",
        "Santiago de Cuba",
        "Segundo Frente",
        "Songo la Maya",
        "Tercer Frente",
      ],
    },
    {
      id: "14",
      nombre: "Guantánamo",
      municipios: [
        "Baracoa",
        "Caimanera",
        "El Salvador",
        "Guantánamo",
        "Imías",
        "Maisí",
        "Manuel Tames",
        "Niceto Pérez",
        "San Antonio del Sur",
        "Yateras",
      ],
    },
    {
      id: "15",
      nombre: "Isla de la Juventud",
      municipios: [],
    },
    {
      id: "16",
      nombre: "Granma",
      municipios: [
        "Bartolomé Masó",
        "Bayamo",
        "Buey Arriba",
        "Campechuela",
        "Cauto Cristo",
        "Guisa",
        "Jiguaní",
        "Manzanillo",
        "Media Luna",
        "Niquero",
        "Pilón",
        "Río Cauto",
        "Yara",
      ],
    },
  ];

  useEffect(() => {
    if (provincias.length === 0) {
      let aux = Region.map((p) => {
        return { label: p.nombre, value: p.id };
      });
      aux.unshift({ label: "Todos", value: -1 });
      setProvincias(aux);
    }
  }, []);

  useEffect(() => {
    let aux = [];
    if (provinciaOption > -1) {
      aux = Region[provinciaOption - 1].municipios.map((i) => {
        return { label: i, value: i };
      });
    }
    aux.unshift({ label: "Todos", value: -1 });
    setMunicipios(aux);
  }, [provinciaOption]);

  const handleProvinciaChange = (event) => {
    setProvinciaOption(event.target.value);
  };
  const handleMunicipioChange = (event) => {
    setMunicipioOption(event.target.value);
  };
  const handleAreaChange = (event) => {
    setAreaOption(event.target.value);
  };
  return (
    <div className="bg-gray-light h-screen">
      <Header />
      <div className="container mx-auto">
        <form className="flex flex-col mt-8">
          <div className="flex items-center mb-4 px-3 md:px-0">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              className="flex flex-nowrap p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
          </div>

          <div className="pl-6 md:px-2">
            <div className="flex flex-row flex-wrap justify-around mb-5 ">
              <RadioBtn
                value="CI"
                id="ci"
                checked={selectedOption}
                onClick={() => setSelectedOption("ci")}
              />
              <RadioBtn
                value="Nombre"
                id="nombre"
                checked={selectedOption}
                onClick={() => setSelectedOption("nombre")}
              />
              <RadioBtn
                value="Correo"
                id="correo"
                checked={selectedOption}
                onClick={() => setSelectedOption("correo")}
              />
              <RadioBtn
                value="Tipo de usuario"
                id="user_type"
                checked={selectedOption}
                onClick={() => setSelectedOption("user_type")}
              />
              <RadioBtn
                value="Dirección"
                id="direccion"
                checked={selectedOption}
                onClick={() => setSelectedOption("direccion")}
              />
            </div>

            <div className="flex flex-col justify-around md:flex-row">
              <Dropdown
                label="Seleccione la Provincia:"
                options={provincias}
                value={provinciaOption}
                onChange={handleProvinciaChange}
                clases="mb-2 md:mb-0"
              />
              <Dropdown
                label="Seleccione el Municipio:"
                options={municipios}
                value={municipios[municipioOption]}
                onChange={handleMunicipioChange}
                clases="mb-2 md:mb-0"
              />
              <Dropdown
                label="Seleccione el Área:"
                options={[{ label: "Area 1", value: "1" }]}
                value={areaOption}
                onChange={handleAreaChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
