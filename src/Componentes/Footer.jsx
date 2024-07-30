import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <>
      

      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
    <span className="text-sm text-gray-500 dark:text-gray-400 mb-3 md:mb-0">
      © 2024 <a href="#" className="hover:underline">Santiago Rios Arquitecto™</a>.  Telefono: +34 631 943 224
    </span>
    <ul className="hidden  md:flex flex-col sm:flex-row items-center text-sm font-medium text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-4">
      <li>
        <a href="#" className="hover:underline">About</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Licensing</a>
      </li>
      <Link 
                to="/contacto"
                className={`block py-2 px-3 rounded md:p-0 ${location.pathname === '/contacto' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Contacto
              </Link>
    </ul>
  </div>
</footer>

    </>
  )
}
