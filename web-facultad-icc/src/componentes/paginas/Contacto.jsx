import React from "react";

export function Contacto({imagenNav})
{
    return (
        <div className='Contenido'>
            <img
                className="rutaImagenBajo"
                src={require(`../../assets/img/navegacion/${imagenNav}`)}
                alt="Adorno Nav"
            />
            <h1>Contacto</h1>
        </div>
    );
}

export default Contacto;