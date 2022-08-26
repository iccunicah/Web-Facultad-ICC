import React from 'react';
import '../../stylesheet/inicio.css'

function Inicio({portada, portadaBajo})
{
    return (
        <header>
            <video
                className='portada'
                muted="muted" 
                loop="loop" 
                src={require(`../../assets/video/${portada}`)}
                type="video/mp4" />
            <img
                className="portadaBajo"
                src={require(`../../assets/img/inicio/${portadaBajo}`)}
                alt="Logo de la Facultad"/>
            <h1>Inicio</h1>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
        </header>
    );
}

export default Inicio;