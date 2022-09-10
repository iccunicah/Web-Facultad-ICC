import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from "react-bootstrap";
import '../../stylesheet/notFound.css';

export function NotFound({imagenNav, wulu}) {
    const navigate = useNavigate();

    useEffect(()=>{

        setTimeout(() => {
            navigate('/')
        }, 7000)

    }, [navigate])
    return(
            <div className="todo">
                <img
                    className="rutaImagenBajo"
                    src={require(`../../assets/img/navegacion/${imagenNav}`)}
                    alt="Logo de la Facultad" />

                <div className="container notFound">
                    <Row>
                            <img
                                src={require(`../../assets/img/navegacion/${wulu}`)}
                                alt="Wulu not found" />
                    </Row>
                </div>
            </div>
        )

}