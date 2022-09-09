import React from "react";
import { Instagram, Facebook, Youtube} from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

function Footer({rutaImagen}) {
    return (

        <div>
            <footer className="py-3 my-4">

                <div className="footer-content">

                    <ul className="sociales">
                        <li><a href="https://www.facebook.com/iccunicah"><Facebook className="centrado"color="black" size="2rem"/></a></li>
                        <li><a href="https://www.youtube.com/channel/UC26gYslgbtHkUvptybeF8YA"><Youtube className="centrado" color="black" size="2rem"/></a></li>
                        <li><a href="https://www.instagram.com/iccunicah/"><Instagram className="centrado" color="black" size="2rem"/></a></li>
                        <li><a href="https://unicah.edu/"><img src={require(`../assets/img-icons/${rutaImagen}`)} alt="imagendku" /></a></li>
                    </ul>

                    <ul className="nav justify-content-center">
                        <li className="nav-item text-center links-texto-footer"><NavLink to="/" className="nav-link px-2 text-white">Inicio</NavLink></li>
                        <li className="nav-item text-center links-texto-footer"><NavLink to="/QuienesSomos" className="nav-link px-2 text-white">¿Quienes Somos?</NavLink></li>
                        <li className="nav-item text-center links-texto-footer"><NavLink to="/Actividades" className="nav-link px-2 text-white">Actividades</NavLink></li>
                    </ul>

                    <ul className='nav justify-content-center'>
                        <li className="nav-item tex-center links-texto-footer"><NavLink to="/Recursos" className="nav-link px-2 text-white">Recursos</NavLink></li>
                        <li className="nav-item tex-center links-texto-footer"><NavLink to="/Contacto" className="nav-link px-2 text-white">Contacto</NavLink></li>
                    </ul>

                </div>
    
                <div className='text-center p-3 footer-bottom'>
                    <p className="color-amarillo">© 2022 • Universidad Católica de Honduras</p>
                </div>
            </footer>
        </div>

    );
}

export default Footer;