import React from 'react'
import Card from 'react-bootstrap/Card'

function CardActividad({ actividad, img, texto }) {

  return (

    <Card style={{
            maxWidth: '366px',
            backgroundColor: '#202136',
            color: '#F7F8FC'
        }}>
        <Card.Img style={{
            /* minHeight: '342px', */
            minHeight: '15vw',
            maxHeight: '342px',
            objectFit: 'cover'

        }} variant="top" src={img} />

        {actividad && texto && (
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
        )}
    </Card>
  )
}

export default CardActividad
