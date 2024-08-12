
import { Link } from "react-router-dom";

export default function RenovacionDeCocinas() {
  return (
    <>
    <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Renovación de Cocinas: Espacios Funcionales y Elegantes
              </h2>
              <p className="mb-4 ">
              La cocina es el corazón del hogar, un lugar donde se combinan la funcionalidad y el estilo para crear un ambiente acogedor y práctico. Como arquitecto especializado en reformas, me dedico a transformar cocinas comunes en espacios de ensueño que maximicen la eficiencia y el diseño.
              </p>
              
              <p className="mb-4 ">
              Desde el diseño inicial hasta la ejecución final, me aseguro de que cada detalle, desde la distribución del espacio hasta la elección de materiales, esté alineado con tus preferencias y necesidades. Ya sea que busques una cocina contemporánea y minimalista o un diseño clásico y elegante, mi misión es ofrecer una renovación que combine estética y funcionalidad de manera excepcional.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded"
                src="https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded"
                src="https://images.pexels.com/photos/6585767/pexels-photo-6585767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="office content 2"
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
  )
}
