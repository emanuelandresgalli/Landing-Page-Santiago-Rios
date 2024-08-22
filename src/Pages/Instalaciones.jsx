import { Link } from "react-router-dom";

export default function Instalaciones() {
  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-4 lg:gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6 text-center lg:text-left">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Fontanería
              </h2>
              <p className="mb-4">
                Servicios de fontanería rápidos y eficientes, resolviendo desde
                pequeñas reparaciones hasta instalaciones completas con
                garantía de calidad.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-0 justify-items-center">
              <img
                className="mt-4 w-full lg:mt-10 rounded"
                src="https://media.istockphoto.com/id/1199687877/photo/plumber-repairs-and-maintains-chrome-siphon-under-the-washbasin-plumber-at-work-in-bathroom.jpg?b=1&s=612x612&w=0&k=20&c=fEaPDw7_r6AeokUN8JWtJz2S4nbuCxprJpoaHqS3UnQ="
                alt="office content 2"
              />
              <img
                className="w-full rounded hidden lg:block"
                src="https://i.ibb.co/CvFs8j5/Grifo.png"
                alt="office content 1"
              />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="gap-4 lg:gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6 text-center lg:text-left">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Electricidad
              </h2>
              <p className="mb-4">
                Servicios de electricidad, desde instalaciones y reparaciones
                hasta mantenimientos, garantizando seguridad y eficiencia en
                cada proyecto.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-0 justify-items-center">
              <img
                className="mt-4 w-full lg:mt-10 rounded"
                src="https://media.istockphoto.com/id/670464056/photo/electrician-fixing-electrical-devices-with-different-tools.jpg?b=1&s=612x612&w=0&k=20&c=tVTdXftzQ7XzsEvogGOlFORcW3yGZmXNy0OLEErmWGI="
                alt="office content 2"
              />
              <img
                className="w-full rounded hidden lg:block"
                src="https://i.ibb.co/H2WsRBb/Tablero-de-Electricidad.png"
                alt="office content 1"
              />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="gap-4 lg:gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6 text-center lg:text-left">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Climatización
              </h2>
              <p className="mb-4">
                Servicios de climatización, instalando y manteniendo sistemas
                para asegurar su confort durante todo el año.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-0 justify-items-center">
              <img
                className="mt-4 w-full lg:mt-10 rounded"
                src="https://media.istockphoto.com/id/484467524/photo/radiator-thermostat.jpg?b=1&s=612x612&w=0&k=20&c=hIG4DsZirZ3zqDxKMHjDHpWk4MTYhHH6sUWPU39GUY0="
                alt="office content 2"
              />
              <img
                className="w-full rounded hidden lg:block"
                src="https://i.ibb.co/w7vYw7Z/Climatizacion.png"
                alt="office content 1"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="text-left">
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Get started
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border bg-blue-50 border-gray-300 rounded-lg hover:bg-blue-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Contáctame
        </Link>
      </div>
    </>
  );
}
