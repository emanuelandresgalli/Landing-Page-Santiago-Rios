import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navegacion() {
  const location = useLocation();
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);

  const toggleServicios = (e) => {
    e.preventDefault();  // Evita el comportamiento predeterminado del navegador
    setIsServiciosOpen(!isServiciosOpen);
  };

  const closeServicios = () => {
    setIsServiciosOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://i.ibb.co/mv1vb2H/SLR-svg.png" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://i.ibb.co/mv1vb2H/SLR-svg.png" className="h-8" alt="Flowbite Logo" loading="lazy" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Reforma SLR</span>
        </a>
        <button
        onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === "/"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleServicios}
                className={`block py-2 px-3 rounded md:p-0 w-full text-center ${
                  isServiciosOpen
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Servicios
              </button>
              {isServiciosOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-800">
                  <li>
                    <Link
                      to="/ReformasDeBaños"
                      onClick={closeServicios}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Reformas de Baños
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/RenovacionDeCocinas"
                      onClick={closeServicios}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Renovación de Cocinas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ReformasIntegrales"
                      onClick={closeServicios}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Reformas Integrales
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/TransformacionesAMedida"
                      onClick={closeServicios}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Transformaciones a Medida
                    </Link>
                    <Link
                      to="/Instalaciones"
                      onClick={closeServicios}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Instalaciones
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/contacto"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === "/contacto"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to="/nosotros"
                className={`block py-2 px-3 rounded md:p-0 ${
                  location.pathname === "/nosotros"
                    ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
