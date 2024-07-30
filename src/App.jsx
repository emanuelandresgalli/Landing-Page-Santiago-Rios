
import 'flowbite';
import './App.css'
import Navegacion from './Componentes/Navegacion'
import Footer from './Componentes/Footer'
import { Route, Routes } from 'react-router-dom'
import Servicios from './Pages/Servicios'
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros';
import Contacto from './Pages/Contacto';



function App() {

  return (
    <>
    
      <Navegacion />

      <Routes>
      <Route path="/" element={ <Home />} ></Route>
      <Route path="/servicios" element={ <Servicios />} ></Route>
      <Route path="/nosotros" element={ <Nosotros />} ></Route>
      <Route path="/contacto" element={ <Contacto />} ></Route>
      </Routes>

      <Footer />
     

  
      
      
    </>
  )
}

export default App
