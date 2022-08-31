import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function QuienesSomos({imagenNav, carousel1, carousel2})
{
    return (
        <>
            <Carousel fade>
                    <Carousel.Item interval={5000}>
                        <a href="https://unicah.edu/FlujogramasWeb/#IF01002">
                            <img
                            className="d-block w-100"
                            src={require(`../../assets/img/quienesSomos/${carousel1}`)}
                            alt="Plan de estudio"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <a href="https://drive.google.com/file/d/1vzmz3Ri1vnhkcTa54z6M7C2ApJ8MpULf/view?usp=sharing">
                            <img
                            className="d-block w-100"
                            src={require(`../../assets/img/quienesSomos/${carousel2}`)}
                            alt="Horario Academico"
                            />
                        </a>
                    </Carousel.Item>
            </Carousel>
            <div className='Contenido'>
                <img
                    className="rutaImagenBajo"
                    src={require(`../../assets/img/navegacion/${imagenNav}`)}
                    alt="Logo de la Facultad"
                />
            </div>
        </>
    );
}

export default QuienesSomos;