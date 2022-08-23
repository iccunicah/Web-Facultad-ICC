import React from 'react';
import '../../stylesheet/inicio.css'

function Inicio({portada, portadaBajo})
{
    return (
        <header>
            <video
                className='portada'
                playsinline="playsinline"
                autoplay="autoplay" 
                muted="muted" 
                loop="loop" 
                src={require(`../../assets/video/${portada}`)}
                type="video/mp4" />
            <img
                className="portadaBajo"
                src={require(`../../assets/img/inicio/${portadaBajo}`)}
                alt="Logo de la Facultad"/>
            <h1>Inicio</h1>
        </header>
    );
}

export default Inicio;