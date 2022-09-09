import React, { useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Aos from 'aos';

function InfoInicio({ aos, texto, img, direccion }) {

  useEffect(() =>{

    Aos.init({ duration: 2000 });

  }, []);

  return (
    <>
        {direccion === "derecha" ? (

            <div className='info' 
                    data-aos={aos}
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                <Row className='justify-content-md-center'>
                    <Col sm={6} className='text-uppercase'>
                        <p>
                            {texto}
                        </p>
                    </Col>
                    <Col sm={4} className='align-self-center'>
                        <img
                            src={img}
                            height="250px"
                            alt="Logo de la Facultad"
                        />
                    </Col>
                </Row>
            </div>

        ) : (

            <div className='info' 
                    data-aos={aos}
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                <Row className='justify-content-md-center'>
                    <Col sm={4} className='d-flex flex-column justify-content-end'>
                        <img
                            src={img}
                            height="250px"
                            alt="Logo de la Facultad"
                        />
                    </Col>
                    <Col sm={6} className='text-uppercase'>
                        <p>
                            {texto}
                        </p>
                    </Col>
                </Row>
            </div>
        )}

        <hr className='linea'   
            data-aos="fade-left"
            data-aos-easing="linear"
        />
    </>
  )
}

export default InfoInicio
