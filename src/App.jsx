
import 'flowbite';
import './App.css'
import Navegacion from './Componentes/Navegacion'
import Footer from './Componentes/Footer'
import { Route, Routes } from 'react-router-dom'
import Servicios from './Pages/Servicios'
import Home from './Pages/Home'



function App() {

  return (
    <>
    
      <Navegacion />

      <Routes>
      <Route path="/" element={ <Home />} ></Route>
      <Route path="/servicios" element={ <Servicios />} ></Route>
      </Routes>

      <Footer />
     

  
      
      
    </>
  )
}

export default App
