import React from "react";
import { Instagram, Facebook, Youtube} from 'react-bootstrap-icons';

function Footer({rutaImagen}) {
    return (

        <div>
            <footer class="py-3 my-4">

                <div class='footer-content'>

                    <ul class="sociales">
                        <li><a href="#"><Facebook class='centrado' color="black" size="2rem"/></a></li>
                        <li><a href="#"><Youtube class='centrado' color="black" size="2rem"/></a></li>
                        <li><a href="#"><Instagram class='centrado' color="black" size="2rem"/></a></li>
                        <li><a href="#"><img src={require(`../assets/img-icons/${rutaImagen}`)}/></a></li>
                    </ul>

                    <ul class="nav justify-content-center">
                        <li class="nav-item text-center links-texto-footer"><a href="#" class="nav-link px-2 text-white">Inicio</a></li>
                        <li class="nav-item text-center links-texto-footer"><a href="#" class="nav-link px-2 text-white">¿Quienes Somos?</a></li>
                        <li class="nav-item text-center links-texto-footer"><a href="#" class="nav-link px-2 text-white">Actividades</a></li>
                    </ul>

                    <ul class='nav justify-content-center'>
                        <li class="nav-item tex-center links-texto-footer"><a href="#" class="nav-link px-2 text-white">Recursos</a></li>
                        <li class="nav-item tex-center links-texto-footer"><a href="#" class="nav-link px-2 text-white">Contacto</a></li>
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