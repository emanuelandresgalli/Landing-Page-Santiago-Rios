import { Link } from "react-router-dom";

export default function ReformasIntegrales() {
  return (
    <>
    <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Reformas Integrales: Transformación Total de Tu Espacio
              </h2>
              <p className="mb-4 ">
              Realizar una reforma integral significa transformar por completo un espacio para adaptarlo a tus necesidades y expectativas, desde la redistribución de los ambientes hasta la selección de los acabados finales. Como arquitecto especializado en reformas integrales, me encargo de cada aspecto del proceso, garantizando una coordinación perfecta entre diseño, planificación y ejecución. 
              </p>
              
              <p className="mb-4 ">
              Mi enfoque es ofrecer soluciones personalizadas que optimicen la funcionalidad y estética de tu hogar, abordando cada detalle con precisión y creatividad. Ya sea que se trate de una renovación completa de un apartamento o de una remodelación extensiva de una casa, mi objetivo es crear un ambiente renovado y armonioso que mejore tu calidad de vida y refleje tu estilo personal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded"
                src="https://images.pexels.com/photos/5644353/pexels-photo-5644353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded"
                src="https://images.pexels.com/photos/24304750/pexels-photo-24304750/free-photo-of-sofa-en-sala-de-estar-moderna-con-ventanas-de-piso-a-techo.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
