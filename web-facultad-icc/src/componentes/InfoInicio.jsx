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
                    <Col sm={6} className='flex-column align-items-center justify-content-center d-flex g-4 text-uppercase'>
                        <p>
                            {texto}
                        </p>
                    </Col>
                    <Col sm={4} className='flex-column align-items-center justify-content-center d-flex g-4'>
                        <img
                            className="img-responsive"
                            src={img}
                            width="100%"
                            height={"auto"}
                            alt="Imagen Representativa al texto"
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
                    <Col sm={4} className='flex-column align-items-center justify-content-center d-flex g-4'>
                        <img
                            cla="img-responsive"
                            src={img}
                            width="100%"
                            height={"auto"}
                            alt="Imagen Representativa al texto"
                        />
                    </Col>
                    <Col sm={6} className='flex-column align-items-center justify-content-center d-flex g-4 text-uppercase'>
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
