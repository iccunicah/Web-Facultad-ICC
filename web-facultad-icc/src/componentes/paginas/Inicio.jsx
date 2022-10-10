import React from 'react';
import HeaderInicio from './HeaderInicio.jsx';
import ImagenesInicio from './ImagenesInicio.jsx';
import '../../stylesheet/inicio.css'

//Imports cards de imagenes
import AOS from 'aos';
import { useEffect } from 'react';
import InfoInicio from '../InfoInicio.jsx';
import { razones } from '../../Razones.js';

function Inicio({ portada, portadaBajo, portadaImagen })
{
    useEffect(() =>{

        AOS.init({ duration: 2000 });

    }, []);

    return (
        <>
            <HeaderInicio 
                portada={portada} 
                portadaBajo={portadaBajo} 
                portadaImagen={portadaImagen} />

            {/** Imagenes de estudiantes ICC */}
            <ImagenesInicio />

            <hr className='linea'   
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" 
            />

            <h1 className='text-center' 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                ¿POR QUÉ ESTUDIAR INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN?
            </h1>

            <hr className='linea'   
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
            />

            {/** Razones para estudiar ICC */}
            {razones.map((razon) => (
                
                <InfoInicio 
                
                    key={razon.id}
                    aos={razon.aos}
                    texto={razon.texto}
                    img={razon.img}
                    direccion={razon.direccion}
                />
            ))}
            
        </>
    );
}

export default Inicio;