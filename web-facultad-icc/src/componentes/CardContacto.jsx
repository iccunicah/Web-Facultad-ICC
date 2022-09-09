import React from 'react'
import Icon from '@mui/material/Icon';
import { Card } from 'react-bootstrap'

// https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Filled
// https://developers.google.com/fonts/docs/material_icons

function CardContacto({ Icono, titulo, correo, footer }) {
  return (
    <Card className="card-contacto text-center">
        <Card.Body>
            {Icono && <Icon className="colorIcon" fontSize="large">{Icono}</Icon>}            
            <Card.Title>{titulo}</Card.Title>

            {/** Si en el correo solo hay uno que renderize esta parte */}
            {correo.length !== 2 ? (

                <>
                    <Card.Text>
                        {correo}
                    </Card.Text>
                    
                    {/** este es para el de redes sociales, que dice 
                     * Facultad de Ingenieria en Ciencias de la Computación Unicah
                    */}
                    {footer && (
                        <Card.Text>
                            {footer}
                        </Card.Text>
                    )}
                </>

            ) : ( 

                /** si tiene más de 1 correo, es un arreglo */
                <>
                    {Object.entries(correo).map(([key, value]) => (

                        <Card.Text key={key}>
                            {value}
                        </Card.Text>

                    ))}

                </>
            )}
        </Card.Body>
    </Card>
  )
}

export default CardContacto
