

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Incluye todos los archivos .js, .jsx, .ts, .tsx en el directorio src
    './public/index.html',        // Incluye el archivo index.html en el directorio public
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Aquí puedes agregar plugins de Tailwind si los necesitas en el futuro
  ],
}

