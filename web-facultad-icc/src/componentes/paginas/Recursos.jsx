import React from 'react';

export function Recursos({imagenNav})
{
    return (
        <div className='Contenido'>
            <img
                className="rutaImagenBajo"
                src={require(`../../assets/img/navegacion/${imagenNav}`)}
                alt="Adorno Nav"
            />
            <h1>Recursos</h1>
        </div>
    );
}

export default Recursos;