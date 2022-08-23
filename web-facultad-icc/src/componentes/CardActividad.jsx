import React from 'react'
import Card from 'react-bootstrap/Card'

function CardActividad({ actividad, img, texto }) {
  return (

    <Card style={{
            maxWidth: '366px',
            minHeight: '241px',
            backgroundColor: '#202136',
            color: '#F7F8FC'
        }}>
        <Card.Img variant="top" src={img} />

        <Card.Body>
            <Card.Title style={{
                color: '#DCDFEE'
            }}>
                {actividad}
            </Card.Title>
            
            <Card.Text>
                {texto}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CardActividad
