import React from 'react';
import { useLocation } from 'react-router-dom';

function QuienesSomos({imagenNav})
{
    return (
        <div className='Contenido'>
            <img
                className="rutaImagenBajo"
                src={require(`../../assets/img/navegacion/${imagenNav}`)}
                alt="Logo de la Facultad"
            />
            <h1>Quienes Somos</h1>
        </div>
    );
}

export default QuienesSomos;