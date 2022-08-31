import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../stylesheet/quienesSomos.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
            <hr className='linea'/>
            <h1 className='text-center text-uppercase titulo'>Quiénes somos</h1>
            <p className='justify-content text-uppercase infoqs'>
                Somos una carrera en donde se abordan las bases teóricas y metodológicas necesarias para el diseño, 
                implantación, análisis, control, procesamiento, transporte, operatividad, toma de decisiones y búsqueda de seguridad 
                de los sistemas informáticos.
                <br />
                Nuestro enfoque está en estudiar el desarrollo de sistemas automatizados y el uso de los lenguajes de programación; 
                de igual forma se enfoca al análisis, diseño y la utilización del hardware y software para lograr la implementación 
                de las más avanzadas aplicaciones industriales y telemáticas
            </p>
            <hr className='linea'/>
            <Row className='text-center'>
                <Col className='text-uppercase'>
                    <h2>Misión</h2>
                    <p className='mv justify-text'>
                        En el año 2022 seremos una universidad donde lo espiritual es tan importante como lo académico, con un sistema certificado y acreditado de educación superior, para el desarrollo intelectual, ético y moral de profesionales que contribuyan a la construcción de una nueva sociedad.
                    </p>
                </Col>
                <Col className='text-uppercase'>
                    <h2>Visión</h2>
                    <p className='mv justify-text'>
                        Garantizar la presencia del catolicismo en la educación superior de Honduras y asegurar una formación integral en función de las distintas dimensiones del ser humano: lo social, lo moral, lo espiritual, lo científico, lo técnico y lo religioso.
                    </p>
                </Col>
            </Row>
            <h2 className='text-center text-uppercase valoresTitulo'>Nuestros Valores</h2>
            <Row className='text-uppercase text-center valores'>
                <Col>
                    <li>Justicia</li>
                </Col>
                <Col>
                    <li>Orden</li>
                </Col>
                <Col>
                    <li>Paz</li>
                </Col>
                <Col>
                    <li>Amor</li>
                </Col>
                <Col>
                    <li>Verdad</li>
                </Col>
            </Row>
        </>
    );
}

export default QuienesSomos;