import React from 'react'
import Col from 'react-bootstrap/Col';

function InfoMisionVision({ aos, titulo, texto }) {
  return (
    <Col className='text-uppercase mt-4'
        data-aos={aos}
        data-aos-easing="linear"
        data-aos-duration="1500">

        <h2 className='tituloVM'>{titulo}</h2>
        <p className='mv justify-text'>
            {texto}
        </p>
    </Col>
  )
}

export default InfoMisionVision
