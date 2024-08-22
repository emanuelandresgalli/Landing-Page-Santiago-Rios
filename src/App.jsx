
import 'flowbite';
import './App.css'
import Navegacion from './Componentes/Navegacion'
import Footer from './Componentes/Footer'
import { Route, Routes } from 'react-router-dom'
import Servicios from './Pages/Servicios'
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros';
import Contacto from './Pages/Contacto';
import ReformasDeBaños from './Pages/ReformasDeBaños';
import RenovacionDeCocinas from './Pages/RenovacionDeCocinas';
import ReformasIntegrales from './Pages/ReformasIntegrales';
import TransformacionesAMedida from './Pages/TransformacionesAMedida';
import Instalaciones from './Pages/Instalaciones';



function App() {

  return (
    <>
    
      <Navegacion />

      <Routes>
      <Route path="/" element={ <Home />} ></Route>
      <Route path="/servicios" element={ <Servicios />} ></Route>
      <Route path="/nosotros" element={ <Nosotros />} ></Route>
      <Route path="/contacto" element={ <Contacto />} ></Route>
      <Route path="/ReformasDeBaños" element={ <ReformasDeBaños />} ></Route>
      <Route path="/RenovacionDeCocinas" element={ <RenovacionDeCocinas />} ></Route>
      <Route path="/ReformasIntegrales" element={ <ReformasIntegrales />} ></Route>
      <Route path="/TransformacionesAMedida" element={ <TransformacionesAMedida />} ></Route>
      <Route path="/Instalaciones" element={ <Instalaciones />} ></Route>
      </Routes>

      <Footer />
     

  
      
      
    </>
  )
}

export default App
