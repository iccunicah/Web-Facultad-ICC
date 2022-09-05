import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound({imagenNav}) {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        }, 1000)
    }, [navigate])
    return(
            <>
            <img
                className="rutaImagenBajo"
                src={require(`../../assets/img/navegacion/${imagenNav}`)}
                alt="Logo de la Facultad" />
            <h1>No se ha encontrado la página que buscas.</h1>
            </>
        )

}