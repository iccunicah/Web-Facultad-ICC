import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from 'react-router-dom';
import NavInicio from './componentes/navegacion/navInicio';
import QuienesSomos from './componentes/paginas/QuienesSomos';
import Contacto from './componentes/paginas/Contacto';
import Actividades from './componentes/paginas/Actividades';
import Recursos from './componentes/paginas/Recursos';
import Inicio from './componentes/paginas/Inicio';
import { NotFound } from './componentes/paginas/NotFound';

function App() {
  return (
    <>
      <NavInicio 
        rutaImagen='LogoUnicahICC.png'
        rutaImagenToggle='Vector.png'
      />
      <Routes>
        <Route path="/" element={<Inicio portada='Portada.mp4' portadaBajo='layered-waves-black-white 1.png'/>} />
        <Route path="*" element={<NotFound imagenNav='FondoMenuMovil.png'/>} />
        <Route path="/QuienesSomos" element={<QuienesSomos imagenNav='FondoMenuMovil.png' />} />
        <Route path="/Contacto" element={<Contacto imagenNav='FondoMenuMovil.png' />} />
        <Route path="/Actividades" element={<Actividades imagenNav='FondoMenuMovil.png' />} />
        <Route path="/Recursos" element={<Recursos imagenNav='FondoMenuMovil.png' />} />
      </Routes>
    </>
  );
}

export default App;
