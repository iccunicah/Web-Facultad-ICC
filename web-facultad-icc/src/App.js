import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './componentes/FooterNuevo.jsx';
import NavInicio from './componentes/navegacion/navInicio';
import QuienesSomos from './componentes/paginas/QuienesSomos';
import Contacto from './componentes/paginas/Contacto';
import Actividades from './componentes/paginas/Actividades';
import Recursos from './componentes/paginas/Recursos';
import Inicio from './componentes/paginas/Inicio';
import { NotFound } from './componentes/paginas/NotFound';

function App () {
  return (
    <div className="App">
      <>
        <NavInicio 
          rutaImagen='LogoUnicahICC.AVIF'
          rutaImagenToggle='Vector.AVIF'
        />
        
        <Routes>
          <Route path="/" element={<Inicio portada='Portada.mp4' portadaImagen='Portada.AVIF' portadaBajo='layered-waves-black-white 1.AVIF' />} />
          <Route path="/QuienesSomos" element={<QuienesSomos imagenNav='FondoMenuMovil.AVIF' carousel1='Carousel1.AVIF' carousel2='Carousel2.AVIF' />} />
          <Route path="/Contacto" element={<Contacto imagenNav='FondoMenuMovil.AVIF' />} />
          <Route path="/Actividades" element={<Actividades imagenNav='FondoMenuMovil.AVIF' />} />
          <Route path="/Recursos" element={<Recursos imagenNav='FondoMenuMovil.AVIF' />} />
          <Route path="*" element={<NotFound imagenNav='FondoMenuMovil.AVIF' wulu='wulu.AVIF'/>} />
        </Routes>
      </>
      <Footer rutaImagen={'UNICAHlogo.png'} />
    </div>
  );
}

export default App;
