import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function InfoMisionVision({ aos, titulo, texto }) {
  return (
    <Container>
      <Row className='text-center'>
        <Col className='text-uppercase mt-4'
            data-aos={aos}
            data-aos-easing="linear"
            data-aos-duration="1500">

            <h2 className='tituloVM'>{titulo}</h2>
            <p className='mv justify-text'>
                {texto}
            </p>
        </Col>
      </Row>
    </Container>
  )
}

export default InfoMisionVision
