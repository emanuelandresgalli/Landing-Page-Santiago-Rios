
import { Link } from "react-router-dom";

export default function ReformasDeBaños() {
  return (
    <>
    <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Transformaciones de Baños de Sueño
              </h2>
              <p className="mb-4 ">
En el corazón de cada hogar, el baño es un espacio fundamental que debe combinar funcionalidad y estética. Como arquitecto especializado en reformas, me dedico a transformar baños ordinarios en auténticos oasis de confort y estilo. 
              </p>
              <p  className="mb-4 " >
              Desde la planificación inicial hasta la ejecución final, me encargo de cada detalle para asegurarme de que el resultado final no solo cumpla con tus expectativas, sino que las supere. Ya sea que desees un diseño moderno y minimalista o una combinación clásica y elegante, mi objetivo es crear un espacio que refleje tu estilo personal y satisfaga tus necesidades diarias.
              </p>

              

            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded"
                src="https://images.pexels.com/photos/6620861/pexels-photo-6620861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded"
                src="https://images.pexels.com/photos/6620703/pexels-photo-6620703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
