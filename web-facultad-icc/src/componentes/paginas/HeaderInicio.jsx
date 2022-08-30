import React from 'react';

function headerIncio({portada, portadaBajo, portadaImagen}) {
    return (  
        <header>
            <video
                autoplay="true"
                className='portada'
                muted="muted" 
                loop="loop" 
                src={require(`../../assets/video/${portada}`)}
                poster={require(`../../assets/img/inicio/${portadaImagen}`)}
                type="video/mp4" />
            <img
                className="portadaBajo"
                src={require(`../../assets/img/inicio/${portadaBajo}`)}
                alt="Logo de la Facultad"/>
        </header>
    );
}

export default headerIncio;