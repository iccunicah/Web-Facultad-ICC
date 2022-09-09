import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../stylesheet/quienesSomos.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactPlayer from 'react-player/lazy';
import AOS from 'aos';
import { useEffect } from 'react';
import InfoQuienesSomos from '../InfoQuienesSomos';
import { MisionVision } from '../../Mision&Vision';
import InfoMisionVision from '../InfoMisionVision';

function QuienesSomos({ imagenNav, carousel1, carousel2 }) {

    useEffect(() => {

        AOS.init({ duration: 2000 });

    },[]);
    
    return (
        <>
        {/** Carousel */}
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

            {/** Contenido */}
            <div className='Contenido'>
                <img
                    className="rutaImagenBajo"
                    src={require(`../../assets/img/navegacion/${imagenNav}`)}
                    alt="Logo de la Facultad"
                />
            </div>

            {/** Info quienes somos */}
            <InfoQuienesSomos />

            {/** Misión y Visión */}
            {MisionVision.map((info) => (

                <InfoMisionVision 
                
                    key={info.id}
                    aos={info.aos}
                    titulo={info.titulo}
                    texto={info.texto}
                />
            ))}

            <h2 className='text-center text-uppercase valoresTitulo mb-5 mt-5' 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">Nuestros Valores</h2>

            <Row className='text-uppercase text-center valores'
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <Col>Justicia</Col>
                <Col>Orden</Col>
                <Col>Amor</Col>
                <Col>Paz</Col>
                <Col>Verdad</Col>

            </Row>

            <hr className='linea'
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" />

            <h2 className='text-center text-uppercase tituloVideo'
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">Conoce un poco más sobre nosotros</h2>

            <div className='player-wrapper scroll-arreglado-ejeY'
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <ReactPlayer
                    url='https://youtu.be/QQTKvPbJ1YM'
                    controls={true}
                    width='100%'
                    height='100%'
                    className='react-player'
                />
            </div>
        </>
    );
}

export default QuienesSomos;