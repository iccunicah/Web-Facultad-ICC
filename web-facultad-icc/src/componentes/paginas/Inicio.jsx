import React from 'react';
import HeaderInicio from './HeaderInicio.jsx';
import ImagenesInicio from './ImagenesInicio.jsx';
import '../../stylesheet/inicio.css'

//Imports cards de imagenes
import AOS from 'aos';
import { useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Inicio({portada, portadaBajo, portadaImagen, info1, info2, info3})
{
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);
    return (
        <>
            <HeaderInicio 
                portada={portada} 
                portadaBajo={portadaBajo} 
                portadaImagen={portadaImagen} />

            <ImagenesInicio />

            <hr className='linea'/>
                <h1 className='text-center'>¿POR QUÉ ESTUDIAR INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN?</h1>
            <hr className='linea'/>

            <div className='info'>
                <Row className='justify-content-md-center'>
                    <Col sm={6} className='text-uppercase'>
                        <p>
                            ES UNA CIENCIA MUY JóVEN QUE HAY MUCHO POR DESCUBRIR YA QUE LA TECNOLOGÍA AVANZA MÁS Y MÁS, 
                            ABRE LA LÓGICA PARA PODER ENTENDER LA FUNCIONALIDAD DE LO PROCESOS, HAY VARIEDADES DE ESTUDIO 
                            EN LAS CUALES SE ENCUENTRA GESTIÓN DE BASE DE DATOS, DESARROLLO DE SOFTWARE, GESTIÓN DE REDES,
                            EL DESARROLLO DE APLICACIONES WEB Y GESTIÓN DE SERVIDORES.
                        </p>
                    </Col>
                    <Col sm={4} className='align-self-center'>
                        <img
                            src={require(`../../assets/img/inicio/${info1}`)}
                            height="250px"
                            alt="Logo de la Facultad"
                        />
                    </Col>
                </Row>
            </div>
            <hr className='linea'/>
            <div className='info'>
                <Row className='justify-content-md-center'>
                    <Col sm={4} className='d-flex flex-column justify-content-end'>
                        <img
                            src={require(`../../assets/img/inicio/${info2}`)}
                            height="250px"
                            alt="Logo de la Facultad"
                        />
                    </Col>
                    <Col sm={6} className='text-uppercase'>
                        <p>
                            ES UNA carrera muy extensa tanto en habilidades técnicas y desarrollo empresarial, lo que permite estar en 
                            un constante aprendizaje ya que la tecnología avanza todos los días y formando parte de esta carrera 
                            se puede contribuir a la evoluvión de la misma.
                        </p>
                    </Col>
                </Row>
            </div>
            <hr className='linea'/>
            <div className='info infoUltima'>
                <Row className='justify-content-md-center'>
                    <Col sm={6} className='text-uppercase'>
                        <p>
                            Es una carrera en la que no te sientes encapsulado, siempre permite ir un paso mas adelante 
                            gracias a que es una carrera en auge, siendo considerada "la carrera del futuro" da la oportunidad 
                            de no quedarse estancado sino de desarrollarse de la mejor manera haciendola una carrera perfecta.
                        </p>
                    </Col>
                    <Col sm={4} className='d-flex flex-column justify-content-center'>
                        <img
                            src={require(`../../assets/img/inicio/${info3}`)}
                            height="250px"
                            alt="Logo de la Facultad"
                        />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Inicio;