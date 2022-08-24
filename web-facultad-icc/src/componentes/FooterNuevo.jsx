import React from "react";
import { Instagram, Facebook, Youtube} from 'react-bootstrap-icons';

function Footer({rutaImagen}) {
    return (

        <div>
            <footer className="py-3 my-4">

                <div className='footer-content'>

                    <ul className="sociales">
                        <li><a href="#"><Facebook className="centrado" color="black" size="2rem"/></a></li>
                        <li><a href="#"><Youtube className="centrado" color="black" size="2rem"/></a></li>
                        <li><a href="#"><Instagram className="centrado" color="black" size="2rem"/></a></li>
                        <li><a href="#"><img src={require(`../assets/img-icons/${rutaImagen}`)}/></a></li>
                    </ul>

                    <ul className="nav justify-content-center">
                        <li className="nav-item text-center links-texto-footer"><a href="#" className="nav-link px-2 text-white">Inicio</a></li>
                        <li className="nav-item text-center links-texto-footer"><a href="#" className="nav-link px-2 text-white">¿Quienes Somos?</a></li>
                        <li className="nav-item text-center links-texto-footer"><a href="#" className="nav-link px-2 text-white">Actividades</a></li>
                    </ul>

                    <ul className='nav justify-content-center'>
                        <li className="nav-item tex-center links-texto-footer"><a href="#" className="nav-link px-2 text-white">Recursos</a></li>
                        <li className="nav-item tex-center links-texto-footer"><a href="#" className="nav-link px-2 text-white">Contacto</a></li>
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